const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    write: { type: String, required: true },
    bio: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bgPic: { type: String, required: true },
    profilePic: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcryp.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)
