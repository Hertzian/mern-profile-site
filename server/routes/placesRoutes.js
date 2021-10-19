const express = require('express')
const router = express.Router()
const protect = require('../utils/protectRoutes')
const placesController = require('../controllers/placesController')

router.get('/get-all', placesController.allPlaces)
router.get('/get-place/:placeId', placesController.getPlace)
router.post('/new-place', placesController.newPlace)
router.put('/update-place/:placeId', placesController.updatePlace)

module.exports = router
