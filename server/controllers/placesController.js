const { Place } = require('../lib/db/models')

// @route   GET /api/places/get-all
// @access   private
exports.allPlaces = async (req, res) => {
  try {
    const places = await Place.findAll()
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
    return res.json(place)
  } catch (err) {
    return res.json(err)
  }
}

// @route   POST /api/places/new-place
// @access   private
exports.newPlace = async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    const place = await Place.create({ company, job, year, assignment, show, userId: req.user.id })
    return res.json({ message: 'Place created!', place })
  } catch (err) {
    return res.json(err)
  }
}

// @route   PUT /api/places/update-place/:placeId
// @access   private
exports.updatePlace = async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.placeId)
    const propsToUpdate = Object.keys(req.body)

    for (const prop of propsToUpdate) {
      if (prop === 'id') continue
      if (req.body[prop]) {
        place[prop] = req.body[prop]
      }
      if (typeof req.body[prop] === 'boolean') {
        place[prop] = req.body[prop]
      }
    }

    await place.save()

    return res.json({ message: 'Place updated', place })
  } catch (err) {
    return res.json({ err })
  }
}

// @route   DELETE /api/places/delete-place/:placeId
// @access   private
exports.deletePlace = async (req, res) => {
  try {
    const placeId = req.params.placeId
    const place = await Place.findByPk(placeId)
    await place.destroy()
    return res.json({ place: placeId, message: `ALV place ${req.params.placeId}` })
  } catch (err) {
    console.log(err)
    return res.json({ err })
  }
}
