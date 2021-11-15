import path from 'path'
import express from 'express'
import productsControllers from '../controllers/products.js'
const router = express.Router()


router.get('/add-product',productsControllers.getAddProduct)

router.post('/add-product',productsControllers.postAddProduct)

export default router
