const Product = require('../schema/product.schema.js')

const create = Product.create({ title: 'Товар #2', description: 'Описание', count: 500, price: 500 }, function (error, product) {
  if (error) return console.log(error)
  console.log('Create:\n' + product)
})

const update = Product.findOneAndUpdate({}, function (error, product) {
  // update product
})

const remove = Product.deleteOne({}, function (error, product) {
  // remove product
})

const get = Product.findById({}, function (error, product) {
  // get product
})

const getAll = Product.find({}, function (error, product) {
  // getAll products
})

module.exports = {
  create,
  update,
  remove,
  get,
  getAll,
}
