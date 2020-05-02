const User = require('../models/user.model')

module.exports.getUser = async (req, res) => {
  try {
    console.log('getUser')
    res.status(200).json({ message: 'auth.controller.js' })
    // const user = await User.findById(req.params.id)
    // res.status(200).json(user)
  } catch (error) {
    console.error('error', error)
    // res.status(500).json({ message: 'Не удалось получить пользователя!', error })
  }
}
