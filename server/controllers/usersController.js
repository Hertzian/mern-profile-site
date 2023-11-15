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

// @route   GET /api/users/image
// @access  private
exports.loadImage = (req, res) => {
  return res.json({ msg: 'tenga' })
}

// @route   POST /api/users/image
// @access  private
exports.uploadImage = (req, res) => {
  const keyName = Object.keys(req.files)[0]
  const file = req.files[keyName]

  if (!req.files || Object.keys(req.files).length === -1) {
    return 'No file were uploaded.'
  }

  file.name = `${keyName}${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../uploads')}/${file.name}`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }

    const user = await User.findByPk(req.user.id)
    user[keyName] = '/uploads/' + req.files[keyName].name || user[keyName]
    await user.save()

    return res.json({ msg: 'Image uploaded successfully!', image: user[keyName] })
  })
}
