const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { allPlaces, getPlace, newPlace, updatePlace, deletePlace } = require('../controllers/placesController')

router.get('/get-all', allPlaces)
router.get('/get-place/:placeId', getPlace)
router.post('/new-place', newPlace)
router.put('/update-place/:placeId', updatePlace)
router.delete('/delete-place/:placeId', deletePlace)

module.exports = router
