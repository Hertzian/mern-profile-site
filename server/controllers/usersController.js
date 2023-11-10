const { unlink } = require('fs/promises')
const path = require('path')
const { User, Place, Skill, Project } = require('../lib/db/models')
const { userService: { matchPassword, genToken } } = require('../utils')
const jwt = require('jsonwebtoken')

// @route   POST /api/users/login
// @access  public
exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    const isMatch = matchPassword(password, user.password)
    if (user && isMatch) {

      return res.json({ token: genToken(user.id) })
    }
  } catch (err) {
    return res.status(401).json({ error: err })
  }
}

// @route   GET /api/users/get-front-profile
// @access  public
exports.getFrontProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: process.env.USER_EMAIL },
      include: ['places', 'projects', 'skills'],
      attributes: {
        exclude: 'password' // this field can be an array
      }
    })

    return res.json(user)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

// @route   GET /api/users/profile
// @access  private 
exports.getProfile = async (req, res) => {
  try {
    const id = req.user.id
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: 'password' }
    })

    return res.json(user)
  } catch (err) {
    console.log(err)
    res.json({ error: err })
  }
}

// @route    PUT /api/user/profile
// @access   private
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: 'password' }
    })

    const propsToUpdate = Object.keys(req.body)

    for (const prop of propsToUpdate) {
      if (prop === 'password' && req.body[prop] === '') {
        continue
      }

      if (req.body[prop]) {
        user[prop] = req.body[prop]
      }
    }

    await user.save()

    return res.json({ msg: 'User updated!', user })
  } catch (err) {
    res.json({ error: err })
  }
}

// @route   POST /api/users/upload-portrait
// @access  private
exports.uploadPortrait = async (req, res) => {
  const file = req.files.portrait

  if (!req.files || Object.keys(req.files).length === 0) { return res.json({ err: 'No file were uploaded' }) }

  file.name = `portrait${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${file.name
    }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    const user = await User.findByPk(req.user._id)
    user.portrait = file.name || user.portrait
    user.save()
    return res.json(user.portrait)
  })
}

// @route   POST /api/users/upload-background
// @access  private
exports.uploadBackground = async (req, res) => {
  const file = req.files.background

  if (!req.files || Object.keys(req.files).length === 0) { return res.json({ err: 'No file were uploaded' }) }

  file.name = `background${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${file.name
    }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    const user = await User.findByPk(req.user._id)
    user.background = file.name || file.background
    user.save()
    return res.json(user.background)
  })
  // return res.json({ message: req.files })
}
