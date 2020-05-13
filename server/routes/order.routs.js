const { Router } = require('express')
const router = Router()
const busboyBodyParser = require('busboy-body-parser')

const { create, update, remove, getAll, getById } = require('../controllers/order.controller')

router.get('/getall', getAll)
router.get('/get/:id', getById)
router.post('/create', busboyBodyParser(), create)
router.put('/update/:id', busboyBodyParser(), update)
router.delete('/remove/:id', remove)

module.exports = router
