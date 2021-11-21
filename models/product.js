import path from 'path'
import fs from 'fs'

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
  constructor(t) {
    this.title = t
  }
  save() {
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
}

export default Product
