const { Router } = require('express') // достаем роутер 
const router = Router()

const {
  create,
  update,
  remove,
  getAll,
  getById
} = require('../controllers/product.controller')

// пользователь будет отправлять запросы по
// /api/product
router.get('/getall', getAll)
router.get('/get/:id', getById)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/remove/:id', remove)

/**
 * Ты можешь называть эндоинты как хочешь, я называю их именно так просто 
 * потому, что я привык именно к такому обращению. Возможно это влияние 
 * php`шного прошлого
 */

module.exports = router