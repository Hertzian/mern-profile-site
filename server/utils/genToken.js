const jwt = require('jsonwebtoken')

const genToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })

module.exports = genToken
