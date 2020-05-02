const { Router } = require('express')
const router = Router()

const { checkAuth } = require('../controllers/auth.controller')

router.post('/checkAuth', checkAuth)

module.exports = router
