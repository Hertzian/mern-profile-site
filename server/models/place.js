const mongoose = require('mongoose')

const placeSchema = mongoose.Schema(
  {
    company: { type: String, required: true },
    job: { type: String, required: true },
    year: { type: String, required: true },
    assignment: { type: String, required: true },
    show: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('place', placeSchema)
