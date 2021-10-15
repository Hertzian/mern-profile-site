const User = require('../models/user')
const asyH = require('../utils/asyncHandler')
const genToken = require('../utils/genToken')
const jwt = require('jsonwebtoken')
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

// @route   GET /api/users/read-access
// @access  private
exports.readAccessData = asyH(async (req, res) => {
  try {
    const user = req.user
    return res.json({ email: user.email })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
})

// @route   PUT /api/users/update-access
// @access  private
exports.updateAccess = asyH(async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findById(req.user._id)

    user.email = email || user.email
    user.password = password || user.password

    console.log('email: ', email)
    console.log('password: ', password)

    user.save()
    return res.json({ email: user.email, user: user.password })
  } catch (err) {
    return res.json({ error: err })
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

// @route   POST /api/users/verify
// @access  private
exports.verifyAccess = asyH(async (req, res) => {
  const clientToken = req.body.localToken
  //console.log('req.body: ', req.body)
  //console.log('serverTokenReceipt: ', clientToken)
  try {
    jwt.verify(clientToken, process.env.JWT_SECRET)
    return res.json({ verifiqueichons: true })
  } catch (err) {
    console.log(err)
    return res.json({ verifiqueichons: false, error: err })
  }
})
