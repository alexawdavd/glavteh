const Router = require('express')
const router = new Router()
const journalController = require('../controllers/journalController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),journalController.create)
router.get('/', journalController.getAll)
router.get('/:id', journalController.getOne)

module.exports = router