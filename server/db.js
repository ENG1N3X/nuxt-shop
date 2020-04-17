require('dotenv').config()
const mongoose = require('mongoose')

// require('./query/product.query.js')

let db = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (error) => {
  if (error) return console.log(error)
  let state = mongoose.connection.readyState
  switch (state) {
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
