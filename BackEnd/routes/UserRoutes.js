const router = require('express').Router()

const UserController = require('../controllers/UserController')

//middleware
const verifToken = require('../helpers/verify-token')

router.post('/register', UserController.register)
router.post('/login', UserController.login)


module.exports = router