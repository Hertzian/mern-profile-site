const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getFrontProfile, getProfile, updateProfile, updateAccess, loadPortrait, loadBackground, uploadImage, loadImage } = require('../controllers/usersController')

router.get('/get-front-profile', getFrontProfile)
// protected routes
router
  .get('/', protect, getProfile)
  .put('/', protect, updateProfile)
router
  .get('/image', protect, loadImage)
  .put('/image', protect, uploadImage)

module.exports = router
