const { unlink } = require('fs/promises')
const path = require('path')
const multer = require('multer')
const { User, Place, Skill, Project } = require('../lib/db/models')
const { userService: { matchPassword, genToken }, uploadImages: { upload } } = require('../utils')
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

// @route   PUT /api/users/image/:imageType
// @access  private
exports.uploadImage = (req, res) => {
  const fieldName = req.params.imageType
  if (fieldName !== 'portrait' && fieldName !== 'background') {
    return res.json({ err: '1Invalid parameter' })
  }

  const saveImage = upload(fieldName)
  /* handling errors, express way, multer docs*/
  saveImage(req, res, async (err) => {
    const image = req.file

    if (!image) {
      return res.json({ err: 'nachos...' })
    }

    if (image.fieldname !== 'portrait' && image.fieldname !== 'background' &&
      fieldName !== 'portrait' && fieldName !== 'background') {
      return res.json({ err: '2Invalid parameter' })
    }

    if (err instanceof multer.MulterError) {
      console.log('------', err)
      return res.json({ err: 'Error when uploading' })
    } else if (err) {
      console.log('------', err)
      return res.json({ err })
    }

    const user = await User.findOne({
      where: req.user.id,
      attributes: { exclude: 'password' }
    })

    const oldImage = user[fieldName]
    user[fieldName] = `/uploads/${image?.filename}`

    await user.save()
    try {
      if (oldImage.split('/')[2] !== 'undefined' || null) {
        await unlink('./server' + oldImage)
      }
    } catch (err) {
      /* expected if file doesnt exists */
      if (err.code === 'ENOENT') {
        return res.json({ msg: 'image uploaded successfully', user })
      }
      return res.json({ err: 'IDFK ' + err })
    }

    return res.json({ msg: 'all ok, image uploaded successfully', user })
  })
}
