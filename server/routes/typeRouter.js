const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create) //TODO передать мидлвейр везде, где есть создание
router.get('/', typeController.getAll)
//TODO delete

module.exports = router