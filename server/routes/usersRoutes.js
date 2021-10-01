const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login)
router.get('/profile', usersController.getProfile)
router.get('/portait-image', usersController.getPortaitImage)
router.get('/background-image', usersController.getBackgroundImage)
router.get('/access-credentials', usersController.getAccessCredentials)

module.exports = router
