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

let getProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.findById(prodId, (product) => {
    res.render('shop/product-detail.ejs', {
      product: product,
      pageTitle: product.title,
      path: '/products',
    })
  })
}

let getCart = (req, res, next) => {
  res.render('shop/cart.ejs', {
    path: '/cart',
    pageTitle: 'Your Cart',
  })
}

let getOrders = (req, res, next) => {
  res.render('shop/orders.ejs', {
    path: '/orders',
    pageTitle: 'Your Orders',
  })
}

let getCheckout = (req, res, next) => {
  res.render('shop/checkout.ejs', {
    path: '/checkout',
    pageTitle: 'Checkout',
  })
}

export default {
  getIndex: getIndex,
  getProducts: getProducts,
  getCart: getCart,
  getCheckout: getCheckout,
  getOrders: getOrders,
  getProduct: getProduct,
}
