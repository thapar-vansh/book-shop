import path from 'path'
import express from 'express'
import adminData from './admin.js'
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('shop.pug',{prods: adminData.products,pageTitle: 'Shop', path :'/'})
})

export default router
