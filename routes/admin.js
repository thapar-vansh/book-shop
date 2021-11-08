import path from 'path'
import express from 'express'
const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
  res.render('add-product.pug',{pageTitle: 'Add Product',path: '/admin/add-product'})
})

router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/')
})

export default {router :router,products : products} 

