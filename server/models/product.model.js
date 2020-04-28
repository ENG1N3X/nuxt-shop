const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    index: true,
    required: true,
  },
  image: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

module.exports = new model('products', productSchema)
