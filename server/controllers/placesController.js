const { Place } = require('../lib/db/models')

// @route   GET /api/places
// @access   private
exports.allPlaces = async (req, res) => {
  try {
    const places = await Place.findAll()
    return res.json({ places })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   POST /api/places/new-place
// @access   private
exports.newPlace = async (req, res) => {
  try {
    const { company, job, year, assignment, show } = req.body
    const place = await Place.create({ company, job, year, assignment, show, userId: req.user.id })
    return res.json({ msg: 'Place created!', place })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   PUT /api/places/:placeId
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

    return res.json({ msg: 'Place updated', place })
  } catch (err) {
    console.log(err)
    return res.json({ err })
  }
}

// @route   DELETE /api/places/:placeId
// @access   private
exports.deletePlace = async (req, res) => {
  try {
    const placeId = req.params.placeId
    const place = await Place.findByPk(placeId)
    await place.destroy()
    return res.json({ id: placeId, msg: `ALV place ${req.params.placeId}` })
  } catch (err) {
    console.log(err)
    return res.json({ err })
  }
}
