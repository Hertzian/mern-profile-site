const express = require('express')
const router = express.Router()
const placesController = require('../controllers/placesController')

router.get('/', placesController.getPlaces)
router.get('/:placeId', placesController.getPlace)

module.exports = router
