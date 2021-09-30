const Place = require('../models/place')
const asyH = require('../utils/asyncHandler')

exports.getPlaces = asyH(async (req, res, next) => {
  const places = await Place.find({})
  //console.log(places)

  res.json({ places, success: true })
})

exports.getPlace = asyH(async (req, res, next) => {
  console.log(req)
  //const place = await Place.find()
})
