const Place = require('../models/place')
const asyH = require('../utils/asyncHandler')

// @route   GET /api/places/get-all
// @access   private
exports.allPlaces = asyH(async (req, res) => {
  try {
    const places = await Place.find({})
    return res.json({ places })
  } catch (err) {
    return res.json(err)
  }
})

// @route   GET /api/places/get-place/:placeId
// @access   private
exports.getPlace = asyH(async (req, res) => {
  try {
    const place = await Place.findById(req.params.placeId)
    return res.json({ place })
  } catch (err) {
    return res.json(err)
  }
})

// @route   POST /api/places/new-place
// @access   private
exports.newPlace = asyH(async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    await Place.create({ company, job, year, assignment, show })
    return res.json({ message: 'Place created!' })
  } catch (err) {
    return res.json(err)
  }
})

// @route   PUT /api/places/update-place/:placeId
// @access   private
exports.updatePlace = asyH(async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    let place = await Place.findById(req.params.placeId)
    place.company = company || place.company
    place.job = job || place.job
    place.year = year || place.year
    place.assignment = assignment || place.assignment
    place.show = show || place.show
    place.save()
    return res.json({ message: 'Place updated', place })
  } catch (err) {
    return res.json({ err })
  }
})
