const User = require('../models/user.model')
const moment = require('moment')

module.exports.create = async (req, res) => {
  try {
    const userFound = await User.findOne({ login: req.body.login })
    if (userFound) {
      res.status(302).json({ message: 'Данный логин уже используется!' })
    } else {
      req.body.created = moment().format('YYYY-MM-DD-HH-mm-ss')
      await User.create(req.body)
      res.status(201).json({ message: 'Пользователь добавлен!' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Не удалось добавить пользователя!', error })
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = req.body
    await User.updateOne({ _id: req.params.id }, { $set }, { new: true })
    res.json({ message: 'Данные обновленны!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось обновить данные!', error })
  }
}

module.exports.remove = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Пользователь удален!' })
  } catch (error) {
    res.status(500).json({ message: 'Не удалось удалить пользователя!', error })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить пользователя!', error })
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Не удалось получить список пользователей!' })
  }
}
