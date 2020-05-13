const { Router } = require('express')
const router = Router()

const { create, update, remove, getAll, getById } = require('../controllers/user.controller')

router.get('/getall', getAll)
router.get('/get/:id', getById)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/remove/:id', remove)

module.exports = router
