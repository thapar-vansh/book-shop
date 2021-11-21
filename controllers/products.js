import Product from '../models/product.js'

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
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

let getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop.ejs', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      formCSS: true,
      activeShop: true,
      productCSS: true,
    })
  })
}

let get404 = (req, res, next) => {
  res
    .status(404)
    .render('404.ejs', { pageTitle: 'Page not found', path: 'Error' })
}

export default {
  getAddProduct: getAddProduct,
  postAddProduct: postAddProduct,
  getProducts: getProducts,
  get404: get404,
}
