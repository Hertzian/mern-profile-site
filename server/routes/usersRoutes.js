const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getFrontProfile, getProfile, updateProfile, updateAccess, loadPortrait, loadBackground, uploadPortrait, uploadBackground } = require('../controllers/usersController')

router.get('/get-front-profile', getFrontProfile)
// protected routes
router.get('/profile', protect, getProfile)
router.put('/profile', protect, updateProfile)
router.post('/upload-portrait', protect, uploadPortrait)
router.post('/upload-background', protect, uploadBackground)

module.exports = router
