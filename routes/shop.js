import path from 'path'
import express from 'express'
import productsControllers from '../controllers/products.js'
const router = express.Router()

router.get('/',productsControllers.getProducts)

export default router
