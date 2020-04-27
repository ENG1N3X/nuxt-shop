const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: true,
    index: true,
  },
  description: {
    type: String,
    default: '',
  },
  count: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    index: true,
    default: 0,
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
