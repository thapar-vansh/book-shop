import path from 'path'
import express from 'express'
const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.resolve('views/add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/')
})

export default {router :router,products : products} 

