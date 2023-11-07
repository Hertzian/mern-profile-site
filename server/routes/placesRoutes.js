const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { allPlaces, getPlace, newPlace, updatePlace, deletePlace } = require('../controllers/placesController')

router
  .get('/', protect, allPlaces)
  .post('/', protect, newPlace)
router
  .put('/:placeId', protect, updatePlace)
  .delete('/:placeId', protect, deletePlace)

module.exports = router
