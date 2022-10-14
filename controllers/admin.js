import Product from '../models/product.js'
//import User from '../models/user.js'

let getAddProduct = (req, res, next) => {
  res.render('admin/edit-product.ejs', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  })
}

let postAddProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title,price,description,imageUrl)
  product
  .save()
  .then(result => {
    console.log("Created product")
    res.redirect('/admin/products')
  })
  .catch((err) => console.log(err))
}

let getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  if (!editMode) {
    return res.redirect('/')
  }
  const prodId = req.params.productId

  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        res.redirect('/')
      }
      res.render('admin/edit-product.ejs', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
      })
    })
    .catch((err) => console.log(err))
}

let postEditProduct = (req, res, next) => {
  const prodId = req.body.productId
  const updatedTitle = req.body.title
  const updatedImageUrl = req.body.imageUrl
  const updatedPrice = req.body.price
  const updatedDesc = req.body.description
  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDesc, 
    updatedImageUrl,
    prodId, 
  )
  product
    .save()
    .then((result) => {
      console.log('UPDATED PRODUCT')
      res.redirect('/admin/products')
    })
    .catch((err) => console.log(err))
}

let getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render('admin/products.ejs', {
        prods: products,
        pageTitle: 'Shop',
        path: '/admin/products.ejs',
      })
    })
    .catch((err) => console.log(err))
}

let postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId
  Product.deleteById(prodId) //also by Product.destroy({where:})
    .then(() => {
      console.log('DESTROYED PRODUCT')
      res.redirect('/admin/products')
    })
    .catch((err) => console.log(err))
}

export default {
  postAddProduct: postAddProduct,
  getAddProduct: getAddProduct,
  getProducts: getProducts,
  getEditProduct: getEditProduct,
  postEditProduct: postEditProduct,
  postDeleteProduct: postDeleteProduct,
}
