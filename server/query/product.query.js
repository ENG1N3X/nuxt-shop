const Product = require('../schema/product.schema.js')

const create = async function (title, description, count, price) {
  await Product.create({ title: title, description: description, count: count, price: price })
    .then(function (result) {
      console.log('Create:\n' + result)
    })
    .catch(function (error) {
      console.error(error)
    })
}

const update = Product.findOneAndUpdate({}, function (error, product) {
  // update product
})

const remove = Product.deleteOne({}, function (error, product) {
  // remove product
})

const get = Product.findById({}, function (error, product) {
  // get product
})

const getAll = async function () {
  await Product.find({})
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error(error)
    })
}

module.exports = {
  create,
  update,
  remove,
  get,
  getAll,
}
