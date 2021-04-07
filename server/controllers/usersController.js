const User = require('../models/user')
const asyH = require('../utils/asyncHandler')

exports.getProfile = asyH(async (req, res, next) => {
  const user = await User.findOne({})

  res.json({ user, success: true })
})
