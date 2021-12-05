const express = require('express')
const router = express.Router()
const { upload } = require('../utils/uploadImages')
const { protect } = require('../utils/protectRoutes')
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login)
router.post('/verify', usersController.verifyAccess)
router.get('/profile', protect, usersController.getProfile)
router.put('/profile', protect, usersController.updateProfile)
router.get('/read-access', protect, usersController.readAccessData)
router.put('/update-access', protect, usersController.updateAccess)
router.post(
  '/upload-portait',
  protect,
  upload.single('portait'),
  usersController.uploadPortait
)

module.exports = router
