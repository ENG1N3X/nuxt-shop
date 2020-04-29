const Product = require('../models/product.model')
const path = require('path')
const fs = require('fs')
const moment = require('moment')

module.exports.create = async (req, res) => {
  try {
    const fileName = moment().format('YYYY-MM-DD-HH-mm-ss-') + req.files.image.name
    const fileImageData = req.files.image.data
    const savePath = path.resolve(__dirname, '../../static/products/')

    await fs.writeFileSync(`${savePath}/${fileName}`, fileImageData, (error) => {
      if (!error) {
        console.error('Не удалось загрузить картинку!', error)
      }
    })

    const fd = req.body
    fd.image = 'products/' + fileName
    await Product.create(fd)

    res.status(201).json({ message: 'Элемент добавлен!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать элемент!', error })
  }
}

module.exports.update = async (req, res) => {
  try {
    const fileName = moment().format('YYYY-MM-DD-HH-mm-ss-') + req.files.image.name
    const fileImageData = req.files.image.data
    const savePath = path.resolve(__dirname, '../../static/products/')

    await fs.writeFileSync(`${savePath}/${fileName}`, fileImageData, (error) => {
      if (!error) {
        console.error('Не удалось загрузить картинку!', error)
      }
    })

    const fd = req.body
    fd.image = 'products/' + fileName

    await Product.updateOne({ _id: req.params.id }, fd, { new: true })
    res.json({ message: 'Данные обновленны!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить данные!', error })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Элемент удален!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить элемент!', error })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось полуичть элемент!', error })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить список элементов!' })
  }
}
