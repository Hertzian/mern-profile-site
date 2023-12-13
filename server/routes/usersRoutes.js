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
  // the next put route expect background || portrait as :imageType
  .put('/image/:imageType', protect, uploadImage)

module.exports = router
