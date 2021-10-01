const User = require('../models/user')
const asyH = require('../utils/asyncHandler')

// @router  GET /api/users/profile
// @access  private
exports.getProfile = asyH(async (req, res) => {
  try {
    const user = await User.findOne({ email: 'test1@test.com' })
    const { name, surname, github, linkedin, phone, bio, profession } = user
    res.json({
      error: false,
      user: { name, surname, github, linkedin, phone, bio, profession }
    })
  } catch (err) {
    console.log(err)
    res.json({ success: false, error: err })
  }
})

// @router  GET /api/users/portait-image
// @access  private
exports.getPortaitImage = asyH(async (req, res) => {
  console.log('portait-image')
  res.json({ data: 'portait-image', success: true })
})

// @router  GET /api/users/background-image
// @access  private
exports.getBackgroundImage = asyH(async (req, res) => {
  console.log('background-image')
  res.json({ data: 'background-image', success: true })
})

// @router  GET /api/users/access-credentials
// @access  private
exports.getAccessCredentials = asyH(async (req, res) => {
  console.log('access-credentials')
  res.json({ data: 'access-credentials', success: true })
})

// @router  POST /api/users/access-credentials
// @access  private
exports.login = asyH(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    return res.json({ token: getToken(user._id) })
  }
  return res.status(401).json({ error: 'Invalid email or password' })
})
