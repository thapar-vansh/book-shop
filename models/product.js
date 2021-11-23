import path from 'path'
import fs from 'fs'
import { get } from 'https'

const p = path.resolve('data/products.json')
fs.readFile(p, (err, fileContent) => {
  let products = []
})

const getProductsFromFile = (cb) => {
  const p = path.resolve('data/products.json')
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([])
    } else {
      cb(JSON.parse(fileContent))
    }
  })
}

const products = []
class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
  save() {
    this.id = Math.random().toString()
    getProductsFromFile((products) => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }
  static fetchAll(cb) {
    getProductsFromFile(cb)
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id)
      cb(product)
    })
  }
}

export default Product
