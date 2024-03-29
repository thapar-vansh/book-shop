import { ObjectId } from 'mongodb'
import getDb from '../util/database.js'
class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title
    this.price = price
    this.description = description
    this.imageUrl = imageUrl
    this._id = id ? new ObjectId(id):null

  }

  save() {
    const db = getDb.getDb()
    let dbOp;
    if (this._id){
      dbOp = db
      .collection('products')
      .updateOne({_id:this._id}, {$set: this})
    }
    else{
      dbOp = db
      .collection('products')
      .insertOne(this)
    }
    return dbOp
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static fetchAll(){
    const db = getDb.getDb()
    return db
    .collection('products')
    .find()
    .toArray()
    .then(products=>{
      return products
    })
    .catch(err=>{
      console.log(err)
    })
  }

  static findById(prodId){
    const db = getDb.getDb()
    return db
    .collection('products')
    .find({_id : new ObjectId(prodId)})
    .next()
    .then((product)=>{
      console.log(product)
      return product
    })
    .catch(err=>console.log(err))
  }

  static deleteById(prodId){
    const db = getDb.getDb()
    return db
    .collection('products')
    .deleteOne({_id : new ObjectId(prodId)})
    .then((result)=>{
      console.log('Deleted')
    })
    .catch(err=>console.log(err))
  }
}

export default Product
