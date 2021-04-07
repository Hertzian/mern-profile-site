const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    write: { type: String, required: true },
    bio: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    bgPic: { type: String, required: true },
    profilePic: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)
