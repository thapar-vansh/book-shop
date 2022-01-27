import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'

import errController from './controllers/products.js'
import mongoConnect from './util/database.js'


//import cors from 'cors'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

import adminRoutes from './routes/admin.js'
//import shopRoutes from './routes/shop.js'


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
  // User.findByPk(2)
  //   .then((user) => {
  //     req.user = user
  //     //console.log(user)
  //     next()
  //   })
  //   .catch((err) => console.log(err))
  next()
})

app.use('/admin', adminRoutes)
// app.use(shopRoutes)

app.use(errController.get404)

mongoConnect.mongoConnect(()=>{
  app.listen(3000)
})








