import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'

app.set('view engine','ejs')
app.set('views','views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve('public')))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).render('404.ejs',{pageTitle: 'Page not found'})
}) 
app.listen(3000)
