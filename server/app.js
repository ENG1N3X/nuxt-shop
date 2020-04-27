require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const productRoutes = require('./routes/product.routs')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
  .catch((e) => console.error('MongoDB connection error', e))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// REST API
app.use('/api/product', productRoutes)

module.exports = app
