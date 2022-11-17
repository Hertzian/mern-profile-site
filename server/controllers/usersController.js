const { unlink } = require('fs/promises')
const path = require('path')
const { user: User, place: Place, skill: Skill, project: Project } = require('../lib/db/models')
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
    const user = await User.findOne({ where: { email: process.env.USER_EMAIL } })
    console.log(user)
    const places = await Place.findAll({ where: { userId: user.id } })
    const projects = await Project.findAll({ where: { userId: user.id } })
    const skills = await Skill.findAll({ where: { userId: user.id } })

    const { name, lastname, email, github, linkedin, phone, bio, profession } =
      user
    const showPlaces = places.filter((place) => place.show === true)
    const showSkills = skills.filter((skill) => skill.show === true)
    const showProjects = projects.filter((project) => project.show === true)

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
        portrait: `/public/uploads/${user.portrait}`,
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
    let user = await User.findByPk(req.user.id)
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
    let user = await User.findByPk(req.user.id)

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
    const user = await User.findOne({ where: { email } })
    if (user && (await user.matchPassword(password))) {
      return res.json({ token: genToken(user.id) })
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

// @route   POST /api/users/upload-portrait
// @access  private
exports.uploadportrait = asyH(async (req, res) => {
  const file = req.files.portrait

  if (!req.files || Object.keys(req.files).length === 0)
    return res.json({ err: 'No file were uploaded' })

  file.name = `portrait${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${file.name
    }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    let user = await User.findById(req.user._id)
    user.portrait = file.name || user.portrait
    user.save()
    return res.json(user.portrait)
  })
})

// @route   POST /api/users/upload-background
// @access  private
exports.uploadBackground = asyH(async (req, res) => {
  const file = req.files.background

  if (!req.files || Object.keys(req.files).length === 0)
    return res.json({ err: 'No file were uploaded' })

  file.name = `background${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${file.name
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

// @route   GET /api/users/load-portrait
// @access  private
exports.loadportrait = asyH(async (req, res) => {
  const user = req.user
  return res.json({ image: user.portrait })
})

// @route   GET /api/users/background
// @access  private
exports.loadBackground = asyH(async (req, res) => {
  const user = req.user
  return res.json({ image: user.background })
})
