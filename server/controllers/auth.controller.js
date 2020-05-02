const User = require('../models/user.model')

module.exports.checkAuth = async (req, res) => {
  try {
    const userFound = await User.findOne({ login: req.body.login })

    if (userFound) {
      if (req.body.password === userFound.password) {
        const userData = {
          id: userFound._id,
          login: userFound.login,
          name: userFound.name,
        }
        res.status(200).json(userData)
      }
    } else {
      res.status(401).json({ message: 'Неверный логин или пароль!' })
    }
  } catch (error) {
    console.error('error', error)
    res.status(500).json({ message: 'Не удалось получить пользователя!', error })
  }
}
