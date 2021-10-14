const express = require('express')
const router = express.Router()
const { protect } = require('../utils/protectRoutes')
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login)
router.get('/profile', usersController.getProfile)
router.put('/profile', protect, usersController.updateProfile)
router.get('/portait-image', protect, usersController.getPortaitImage)
router.get('/background-image', protect, usersController.getBackgroundImage)
router.get('/access-credentials', protect, usersController.getAccessCredentials)

module.exports = router
