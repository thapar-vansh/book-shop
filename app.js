import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

import adminData from './routes/admin.js'
import shopRoutes from './routes/shop.js'

app.set('view engine','pug')
app.set('views','views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve('public')))

app.use('/admin',adminData.router)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.resolve('views/404.html'))
}) 
app.listen(3000)
