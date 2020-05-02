const { Router } = require('express')
const router = Router()

const { getUser } = require('../controllers/auth.controller')

router.get('/getUser/:user', getUser)

module.exports = router
