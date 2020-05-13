const Order = require('../models/order.model')

module.exports.create = async (req, res) => {
  try {
    await Order.create(req.body)
    res.status(201).json({ message: 'Элемент добавлен!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось создать элемент!', error })
  }
}

module.exports.update = async (req, res) => {
  try {
    await Order.updateOne({ _id: req.params.id }, req.body, { new: true })
    res.json({ message: 'Данные обновленны!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить данные!', error })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Order.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Элемент удален!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить элемент!', error })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось полуичть элемент!', error })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить список элементов!' })
  }
}
