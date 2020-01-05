import express from 'express'
import sql from './mysql'
import cors from 'cors'

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

  app.post('/catalog', (req, response) => {
    let filter = req.body
    console.log('Request Search', filter)
    sql.query('SELECT * FROM catalog WHERE ?', filter, (error, result) => {
      if (error) {
        console.log(error)
        return
      }
      console.log('result: ', result)
      console.log('queries: ', catalogQueries)
      // now get the next question to ask
      let success = false
      for (let field of catalogQueries) {
        if (!(field in filter)) {
          sql.query('SELECT DISTINCT ' + field + ' FROM catalog WHERE ?', filter, (error, result) => {
            if (error) {
              console.log(error)
              return
            }
            console.log('field: ', field, 'options: ', result)
            let options = []
            for (let obj of result) {
              options.push(obj[field])
            }
            if (options.length > 1) {
              console.log('Next Question: ', field)
              response.json({
                nextQuestion: field,
                options: options,
                result: result
              })
              success = true
            }
          })
        }
        if (success) break
      }
      console.log("other")
      if (!success) response.json({})
    })
  })
}
