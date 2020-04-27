const Product = require('../models/product.model')

module.exports.create = async (req, res) => {
  console.log('req.body', req.body)
  // console.log('req', req)
  console.log('res.body', res.body)
  try {
    await Product.create(req.body)
    res.status(201).json({ message: 'Элемент добавлен!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать элемент!', error })
  }
}

module.exports.update = async (req, res) => {
  const $set = req.body
  try {
    await Product.updateOne({ _id: req.params.id }, { $set }, { new: true })
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
