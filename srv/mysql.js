import mysql from 'mysql2'

export const connectionPool = mysql.createPool({
  connectionLimit: 30,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_SCHEMA || 'steering_columnsg',
})

export const sqlConnection = (queryFunc) => {
  connectionPool.getConnection((err, conn) => {
    if (err) {
      conn.release()
      console.log('Error getting connection!')
      throw err
    }
    queryFunc(conn)
    conn.release()
  })
}
