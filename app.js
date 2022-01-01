import path from 'path'
import express, { query } from 'express'
import bodyParser from 'body-parser'

import errController from './controllers/products.js'
import sequelize from './util/database.js'
import Product from './models/product.js'
import User from './models/user.js'
//import cors from 'cors'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve('public')))


// app.use(
//   cors({
//     allowedHeaders: ['sessionId', 'Content-Type'],
//     exposedHeaders: ['sessionId'],
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     preflightContinue: false,
//   })
// )

// sequelize.sync({force:true})        #to override the changes

app.use((res, req, next) => {
  User.findByPk(2)
    .then((user) => {
      req.user = user
      //console.log(user)
      next()
    })
    .catch((err) => console.log(err))
})

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errController.get404)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)

sequelize
.sync()
.then((result) => {
  return User.findByPk(2)
})
.then((user) => {
  if (!user) {
    return User.create({ name: 'VANSH', email: 'thapar.vansh@outlook.com' })
  }
  return user
})
.then((user) => {
  //console.log(user)
  app.listen(3000)
})
.catch((err) => console.log(err))










