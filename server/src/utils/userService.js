const jwt = require('jsonwebtoken')
const { User } = require('../lib/db/models')
const bcrypt = require('bcryptjs')

const genToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  )
}

const matchPassword = async (enteredPassword, existingPassword) => {
  return await bcrypt.compare(enteredPassword, existingPassword)
}

// protect routes
const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) return res.status(401).json({ error: 'Unauthorized' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findByPk(decoded.userId)
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized to use this route' })
  }
}

module.exports = {
  genToken,
  matchPassword,
  protect
}
