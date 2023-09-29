const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login)
router.post('/verify', usersController.verifyAccess)
router.get('/get-front-profile', usersController.getFrontProfile)
router.get('/profile', protect, usersController.getProfile)
router.put('/profile', protect, usersController.updateProfile)
router.get('/read-access', protect, usersController.readAccessData)
router.put('/update-access', protect, usersController.updateAccess)
router.get('/load-portrait', protect, usersController.loadPortrait)
router.get('/load-background', protect, usersController.loadBackground)
router.post('/upload-portrait', protect, usersController.uploadPortrait)
router.post('/upload-background', protect, usersController.uploadBackground)

module.exports = router
