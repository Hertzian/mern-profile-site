const User = require('../models/user')
const asyH = require('../utils/asyncHandler')
const genToken = require('../utils/genToken')
const bcrypt = require('bcryptjs')

// @route   GET /api/users/profile
// @access  public
exports.getProfile = asyH(async (req, res) => {
  try {
    const user = await User.findOne({ email: 'test@test.com' })
    const { name, lastname, github, linkedin, phone, bio, profession } = user
    //console.log(user)
    res.json({
      error: false,
      user: { name, lastname, github, linkedin, phone, bio, profession }
    })
  } catch (err) {
    console.log(err)
    res.json({ success: false, error: err })
  }
})

//@route    PUT /api/user/profile
//@access   private
exports.updateProfile = asyH(async (req, res) => {
  try {
    const { name, lastname, github, linkedin, phone, bio, profession } =
      req.body
    let user = await User.findById(req.user._id)
    user.name = name || user.name
    user.lastname = lastname || user.lastname
    user.github = github || user.github
    user.linkedin = linkedin || user.linkedin
    user.phone = phone || user.phone
    user.bio = bio || user.bio
    user.profession = profession || user.profession
    user.save()

    res.json({ user })
  } catch (err) {
    res.json({ error: err })
  }
})

// @route   GET /api/users/portait-image
// @access  private
exports.getPortaitImage = asyH(async (req, res) => {
  const user = req.user
  if (!req.files) return res.status(400).json({ error: 'Please upload a file' })

  const file = req.files.portait
  if (!file.mimetype.startsWith('image')) {
    return res
      .status(400)
      .json({ error: `Less than ${process.env.MAX_FILE_UPLOAD} MB please` })
  }

  file.name = `portait_`

  //todo...
})

// @route   GET /api/users/background-image
// @access  private
exports.getBackgroundImage = asyH(async (req, res) => {
  console.log('background-image')
  res.json({ data: 'background-image', success: true })
})

// @route   GET /api/users/access-credentials
// @access  private
exports.getAccessCredentials = asyH(async (req, res) => {
  try {
    res.json({ email: req.user.email, success: true })
  } catch (err) {
    res.json({ error: err })
  }
})

// @route   POST /api/users/login
// @access  public
exports.login = asyH(async (req, res) => {
  const { email, password } = req.body
  //const isMatch = await user.matchPassword(password)
  //res.json({ isMatch, password, user })
  try {
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      return res.json({ token: genToken(user._id) })
    }
    console.log('nachos')
  } catch (err) {
    return res.status(401).json({ error: err })
  }
})
