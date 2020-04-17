const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  title: String,
  description: String,
  count: Number,
  price: Number,
})

module.exports = new model('product', productSchema)
