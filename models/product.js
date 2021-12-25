import db from '../util/database.js'
import Cart from './cart.js'
class Product {
  constructor(id, title, imageUrl, price, description) {
    this.id = id
    this.title = title
    this.imageUrl = imageUrl
    this.price = price
    this.description = description
  }

  save() {
    return db.query('INSERT INTO products (title,price,description,imageurl) VALUES($1,$2,$3,$4)',
    [this.title,this.price,this.description,this.imageUrl]
    )
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.query('SELECT * FROM products', [])
  }

  static findById(id) {}
}

export default Product
