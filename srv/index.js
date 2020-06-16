import express from 'express'
import cors from 'cors'
import httpServer from 'http'
import sql from './mysql'
import path from 'path'

// borrow routes from vue-router
const SERVE_PATH = process.env.SERVE_PATH || ''
const { staticRoutes, dynamicRoutes } = require('../src/router/routes')
const appRoutes = [...staticRoutes, ...dynamicRoutes].map(o => SERVE_PATH + o.path)

const PORT = 3000

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

function server (app, http) {
  app.use(cors({ origin: ['http://localhost:8080', /columnsgalore\.com$/] }))
  app.use(express.json())
  app.use(express.static('../dist'))

  app.get(appRoutes, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'app.html'))
  })

  let catalogQueries = [
    'Manufacturer',
    'Model',
    'Year',
    'Shift',
    'Transmission',
    'Tilt',
    'AdditionalOptions'
  ]

  app.get('/api/ping', (req, response) => {
    response.json({ msg: 'pong' })
  })

  app.get('/api/part', (req, response) => {
    sql.query(`
    SELECT * FROM catalog 
    LEFT JOIN productinformation USING(ProductInformationId) 
    LEFT JOIN info_process USING(ProcessInfoId)
    LEFT JOIN info_includes USING(IncludesInfoId)
    LEFT JOIN info_excludes USING(ExcludesInfoId)
    WHERE catalog.CatalogId=? LIMIT 1`, req.query.id, function (error, result) {
      console.log(this.sql)
      if (error) {
        console.log(error)
        return
      }
      response.json(result[0])
    })
  })

  const MAX_RESULTS = 5

  function catalogQuestion (idx, whereString, fn) {
    // get the next question to ask
    if (idx >= catalogQueries.length) {
      return fn({})
    }
    let field = catalogQueries[idx]
    sql.query('SELECT DISTINCT ' + field + ' FROM catalog ' + (whereString ? ('WHERE ' + whereString) : ''), (error, result) => {
      if (error) {
        console.log(error)
        return fn({})
      }
      // console.log('field: ', field, 'options: ', result)
      let options = []
      for (let obj of result) {
        options.push(obj[field])
      }
      if (options.length > 1) {
        console.log('Next Question: ', field)
        fn({
          nextQuestion: field,
          options: options
        })
      } else {
        return catalogQuestion(idx + 1, whereString, fn)
      }
    })
  }

  function catalogQuery (page, whereString, fn) {
    sql.query('SELECT * FROM catalog' + (whereString ? (' WHERE ' + whereString) : '') + ' ORDER BY CatalogId LIMIT ?, ?', [(page - 1) * MAX_RESULTS, MAX_RESULTS], function (error, result) {
      console.log(this.sql)
      if (error) {
        console.log(error)
        return fn({})
      }
      fn({ result: result })
      // console.log('result: ', result)
    })
  }

  function catalogSizeQuery (whereString, fn) {
    sql.query('SELECT COUNT(*) as count FROM catalog' + (whereString ? (' WHERE ' + whereString) : ''), function (error, result) {
      console.log(this.sql)
      if (error) {
        console.log(error)
        return fn({})
      }
      result = Math.ceil(result[0].count / MAX_RESULTS)
      fn({ maxPage: result })
      // console.log('result: ', result)
    })
  }

  app.get('/api/catalog', (req, response) => {
    sql.query('SELECT * FROM catalog WHERE catalog.CatalogId=? LIMIT 1', req.query.id, function (error, result) {
      console.log(this.sql)
      if (error) {
        console.log(error)
        return
      }
      response.json(result[0])
    })
  })

  app.post('/api/catalog', (req, response) => {
    let filter = req.body.query
    let page = req.body.page
    console.log('Request Search', filter)
    let noNextQuestion = false
    // Question with null answer means no next question
    for (const k in filter) {
      if (filter[k] === null || filter[k] === undefined) {
        noNextQuestion = true
        delete filter[k]
      }
    }
    let whereString = objectToWhereValues(filter)
    let payload = {}
    catalogSizeQuery(whereString, (pages) => {
      payload = Object.assign(payload, pages)
      catalogQuery(page, whereString, (result) => {
        payload = Object.assign(payload, result)
        if (noNextQuestion) return response.json(payload)
        catalogQuestion(0, whereString, (data) => {
          payload = Object.assign(payload, data)
          return response.json(payload)
        })
      })
    })
  })

  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}${SERVE_PATH}`))
}

const app = express()
const http = httpServer.Server(app)

server(app, http)
