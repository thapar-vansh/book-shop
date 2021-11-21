import Product from '../models/product.js'

let getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/index.ejs', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      })
    })
}

let getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/product-list.ejs', {
        prods: products,
        pageTitle: 'All products',
        path: '/products',
      })
    })
}

let getCart = (req, res, next) => {
    res.render('shop/cart.ejs',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

let getCheckout = (req, res, next) => {
    res.render('shop/checkout.ejs',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}

export default {
    getIndex: getIndex,
    getProducts: getProducts,
    getCart: getCart,
    getCheckout: getCheckout
}
  