const Router = require('express')
const router = new Router()
const conferenceController = require('../controllers/conferenceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),conferenceController.create)
router.get('/', conferenceController.getAll)

module.exports = router