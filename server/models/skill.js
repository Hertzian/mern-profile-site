const mongoose = require('mongoose')

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    val: { type: String, required: true },
    show: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('skill', skillSchema)
