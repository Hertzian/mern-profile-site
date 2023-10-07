const { place: Place } = require('../lib/db/models')

// @route   GET /api/places/get-all
// @access   private
exports.allPlaces = async (req, res) => {
  try {
    const places = await Place.find({})
    return res.json({ places })
  } catch (err) {
    return res.json(err)
  }
}

// @route   GET /api/places/get-place/:placeId
// @access   private
exports.getPlace = async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.placeId)
    return res.json({ place })
  } catch (err) {
    return res.json(err)
  }
}

// @route   POST /api/places/new-place
// @access   private
exports.newPlace = async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    const place = await Place.create({ company, job, year, assignment, show })
    return res.json({ message: 'Place created!', place })
  } catch (err) {
    return res.json(err)
  }
}

// @route   PUT /api/places/update-place/:placeId
// @access   private
exports.updatePlace = async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    const place = await Place.findByPk(req.params.placeId)
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
}

// @route   DELETE /api/places/delete-place/:placeId
// @access   private
exports.deletePlace = async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.placeId)
    await place.remove()
    return res.json({ message: `ALV place ${placeId}` })
  } catch (err) {
    return res.json({ err })
  }
}
