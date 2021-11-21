import Product from '../models/product.js'
let getAddProduct = (req, res, next) => {
    res.render('admin/add-product.ejs', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      activeShop: true,
      productCSS: true,
      formCSS: true,
      activeAddProduct: true,
    })
}
  
let postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

let getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('admin/products.ejs', {
        prods: products,
        pageTitle: 'Shop',
        path: '/admin/products',
      })
    })
}

export default {
    postAddProduct: postAddProduct,
    getAddProduct: getAddProduct,
    getProducts: getProducts
}