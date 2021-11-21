import path from 'path'
import fs from 'fs'

const products = []
class Product {
  constructor(t) {
    this.title = t
  }
  save() {
    const p = path.resolve('data/products.json')
    fs.readFile(p, (err, fileContent) => {
      let products = []
      if (!err) {
        products = JSON.parse(fileContent)
      }
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }
  static fetchAll(cb) {
    const p = path.resolve('data/products.json')
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([])
      }
      cb(JSON.parse(fileContent))
    })
  }
}

export default Product
