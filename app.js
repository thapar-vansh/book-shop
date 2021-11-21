import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'
import errController from './controllers/products.js'

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve('public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(errController.get404)

app.listen(3000)