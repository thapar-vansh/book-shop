import express from 'express'
import adminControllers from '../controllers/admin.js'
const router = express.Router()


router.get('/add-product',adminControllers.getAddProduct)

router.get('/products',adminControllers.getProducts)

router.post('/add-product',adminControllers.postAddProduct)

export default router
