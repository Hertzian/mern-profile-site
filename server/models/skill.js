const mongoose = require('mongoose')

const skillSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: String, required: true },
    show: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('skill', skillSchema)
