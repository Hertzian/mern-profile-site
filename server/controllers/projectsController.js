const Project = require('../models/project')
const asyH = require('../utils/asyncHandler')

exports.getProjects = asyH(async (req, res, next) => {
  const projects = await Project.find({})

  res.json({ projects, success: true })
})
