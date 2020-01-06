import express from 'express'
import sql from './mysql'
import cors from 'cors'

function objectToWhereValues (object) {
  var sqlString = ''
  for (var key in object) {
    var val = object[key]
    if (typeof val === 'function') {
      continue
    }
    sqlString += (sqlString.length === 0 ? '' : ' AND ') + sql.escapeId(key) + ' = ' + sql.escape(val, true)
  }
  return sqlString
};

export default (app, http) => {
  app.use(cors({ origin: 'http://localhost:8080' }))
  app.use(express.json())

  let catalogQueries = []
  sql.query('SHOW COLUMNS FROM catalog', (error, result) => {
    if (error) {
      throw error
    } else {
      for (let obj of result) {
        if (obj.Key === '') {
          catalogQueries.push(obj.Field)
        }
      }
    }
  })

  app.get('/ping', (req, response) => {
    response.json({ msg: 'pong' })
  })

  app.get('/part', (req, response) => {
    sql.query('SELECT Title, DescriptionHTML FROM ProductInformation WHERE ProductInformationId=? LIMIT 1', req.query.id, function (error, result) {
      console.log(this.sql) 
      if (error) {
        console.log(error)
        return
      }
      response.json(result[0])
    })
  })

  app.post('/catalog', (req, response) => {
    let filter = req.body
    console.log('Request Search', filter)
    sql.query('SELECT * FROM catalog WHERE ' + objectToWhereValues(filter) + ' LIMIT 10', function (error, result) {
      console.log(this.sql)
      if (error) {
        console.log(error)
        return
      }
      // console.log('result: ', result)
      // now get the next question to ask
      function nextOptions (idx) {
        if (idx >= catalogQueries.length) {
          return response.json({
            result: result
          })
        }
        let field = catalogQueries[idx]
        sql.query('SELECT DISTINCT ' + field + ' FROM catalog WHERE ' + objectToWhereValues(filter), (error, result2) => {
          if (error) {
            console.log(error)
            return
          }
          console.log('field: ', field, 'options: ', result2)
          let options = []
          for (let obj of result2) {
            options.push(obj[field])
          }
          if (options.length > 1) {
            console.log('Next Question: ', field)
            return response.json({
              nextQuestion: field,
              options: options,
              result: result
            })
          } else {
            return nextOptions(idx + 1)
          }
        })
      }
      nextOptions(0)
    })
  })
}
