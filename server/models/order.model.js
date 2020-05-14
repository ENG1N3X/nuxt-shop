const { model, Schema } = require('mongoose')

const orderSchema = new Schema({
  order: {
    type: String,
    require: true,
  },
  list: {
    type: String,
    require: true,
  },
  total: {
    type: Number,
    index: true,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Не оплачен',
  },
})

module.exports = new model('orders', orderSchema)
