import pg from 'pg'
const { Pool } = pg

const CONFIG = {
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'book-shop',
  max: 10,
}

const pool = new Pool(CONFIG)

export default {
  query: function query(text, params) {
    return new Promise((resolve, reject) => {
      try {
        const result = pool.query(text, params)
        return resolve(result)
      } catch (error) {
        return reject(error)
      }
    })
  }
}
