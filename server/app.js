require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

// Добавляем роуты
const productRoutes = require('./routes/product.routs')
const userRoutes = require('./routes/user.routs')
const authRoutes = require('./routes/auth.routs')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
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

// Doc: https://www.npmjs.com/package/cors
const whiteList = ['http://127.0.0.1:3000', 'http://localhost:3000', 'https://nuxtshop.herokuapp.com', '23.108.217.143', '23.105.225.142', '54.154.216.60', '54.76.178.89']
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}
app.use(cors(corsOptions))

// REST API
app.use('/api/product', productRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

module.exports = app
