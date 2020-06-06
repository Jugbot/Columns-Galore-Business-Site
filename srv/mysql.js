import mysql from 'mysql'

var connection = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3306',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || 'password',
  database: process.env.DATABASE || 'columnsgalore'
})

connection.connect(function (err) {
  if (err) console.log(err)
})

export default connection
