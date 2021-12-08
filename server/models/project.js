const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    repo: { type: String, required: true },
    image: { type: String, required: false, default: 'placeholder.jpg' },
    description: { type: String, required: true },
    show: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('project', projectSchema)
