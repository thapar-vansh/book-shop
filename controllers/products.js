import adminRoutes from '../routes/admin.js'
const products = []
let getAddProduct = (req, res, next) => {
  res.render('add-product.ejs', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeShop: true,
    productCSS: true,
    formCSS: true,
    activeAddProduct: true,
  })
}

let postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
} 

let getProducts = (req, res, next) => {
  res.render('shop.ejs', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    formCSS : true,
    activeShop: true,
    productCSS: true,
  })
}
 
export default {getAddProduct : getAddProduct,
  postAddProduct : postAddProduct,
  getProducts : getProducts}