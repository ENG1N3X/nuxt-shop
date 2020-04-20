require('dotenv').config()
const mongoose = require('mongoose')

const { create, update, remove, get, getAll } = require('./query/product.query.js')

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(function (result) {
    switch (result.connection.readyState) {
      case 0:
        console.log('MongoDB disconnected')
        break
      case 1:
        console.log('MongoDB connected')
        break
      case 2:
        console.log('MongoDB connecting')
        break
      case 3:
        console.log('MongoDB disconnecting')
        break
    }
  })
  .catch(function (error) {
    console.log(error)
  })

// from product.query.js
create('title', 'desc', 228, 227)
// getAll()
