const { unlink } = require('fs/promises')
const path = require('path')
const User = require('../models/user')
const Place = require('../models/place')
const Skill = require('../models/skill')
const Project = require('../models/project')
const asyH = require('../utils/asyncHandler')
const genToken = require('../utils/genToken')
const jwt = require('jsonwebtoken')

// @route   GET /api/users/profile
// @access  public
exports.getProfile = asyH(async (req, res) => {
  try {
    const user = req.user
    const { name, lastname, github, linkedin, phone, bio, profession } = user
    return res.json({
      error: false,
      user: { name, lastname, github, linkedin, phone, bio, profession }
    })
  } catch (err) {
    console.log(err)
    res.json({ success: false, error: err })
  }
})

// @route   GET /api/users/get-front-profile
// @access  public
exports.getFrontProfile = asyH(async (req, res) => {
  try {
    const user = await User.findOne({ email: process.env.USER_EMAIL })
    const places = await Place.find()
    const projects = await Project.find()
    const skills = await Skill.find()

    const { name, lastname, email, github, linkedin, phone, bio, profession } =
      user
    const showPlaces = places.filter((place) => place.show === 'yes')
    const showSkills = skills.filter((skill) => skill.show === 'yes')
    const showProjects = projects.filter((project) => project.show === 'yes')

    return res.json({
      user: {
        name,
        lastname,
        email,
        github,
        linkedin,
        phone,
        bio,
        profession,
        portait: `/public/uploads/${user.portait}`,
        background: `/public/uploads/${user.background}`
      },
      places: showPlaces,
      skills: showSkills,
      projects: showProjects
    })
  } catch (err) {
    console.log(err)
    return res.json(err)
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
    //console.log(user)
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

    //console.log('email: ', email)
    //console.log('password: ', password)

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

// @route   POST /api/users/upload-portait
// @access  private
exports.uploadPortait = asyH(async (req, res) => {
  const file = req.files.portait

  if (!req.files || Object.keys(req.files).length === 0)
    return res.json({ err: 'No file were uploaded' })

  file.name = `portait${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${
    file.name
  }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    let user = await User.findById(req.user._id)
    user.portait = file.name || user.portait
    user.save()
    return res.json(user.portait)
  })
})

// @route   POST /api/users/upload-background
// @access  private
exports.uploadBackground = asyH(async (req, res) => {
  const file = req.files.background

  if (!req.files || Object.keys(req.files).length === 0)
    return res.json({ err: 'No file were uploaded' })

  file.name = `background${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${
    file.name
  }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    let user = await User.findById(req.user._id)
    user.background = file.name || file.background
    user.save()
    return res.json(user.background)
  })
  //return res.json({ message: req.files })
})

// @route   GET /api/users/load-portait
// @access  private
exports.loadPortait = asyH(async (req, res) => {
  const user = req.user
  return res.json({ image: user.portait })
})

// @route   GET /api/users/background
// @access  private
exports.loadBackground = asyH(async (req, res) => {
  const user = req.user
  return res.json({ image: user.background })
})
