const path = require('path')
const Project = require('../models/project')
const asyH = require('../utils/asyncHandler')

// @route   GET /api/projects/get-all
// @access   private
exports.getProjects = asyH(async (req, res) => {
  const projects = await Project.find({})

  res.json({ projects, success: true })
})

// @route   GET /api/projects/get-project/:projectId
// @access   private
exports.getProject = asyH(async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId)
    return res.json({ project })
  } catch (err) {
    return res.json(err)
  }
})

// @route   POST /api/projects/new-project
// @access   private
exports.newProject = asyH(async (req, res) => {
  try {
    const { name, url, repo, description, show } = req.body
    const project = await Project.create({
      name,
      url,
      repo,
      description,
      show
    })
    return res.json({ message: 'Project created!', project })
  } catch (err) {
    return res.json(err)
  }
})

// @route   PUT /api/projects/update-project/:projectId
// @access   private
exports.updateProject = asyH(async (req, res) => {
  try {
    const { name, url, repo, image, description, show } = req.body
    const project = await Project.findById(req.params.projectId)
    project.name = name || project.name
    project.url = url || project.url
    project.repo = repo || project.repo
    project.image = image || project.image
    project.description = description || project.description
    project.show = show || project.show
    project.save()
    return res.json({ message: 'Project updated!', project })
  } catch (err) {
    return res.json(err)
  }
})

// @route   DELETE /api/projects/delete-project/:projectId
// @access   private
exports.delteProject = asyH(async (req, res) => {
  try {
    const projectId = req.params.projectId
    const project = await Project.findById(projectId)
    await project.remove()
    return res.json({ message: `Project gone, ${projectId}` })
  } catch (err) {
    return res.json(err)
  }
})

// @route   POST /api/projects/upload-project/:projectId
// @access   private
exports.uploadImage = asyH(async (req, res) => {
  const file = req.files.project
  const projectId = req.params.projectId

  if (!req.files || Object.keys(req.files).length === 0)
    return res.json({ err: 'No file were uploaded' })

  file.name = `project-${projectId}${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${
    file.name
  }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    let project = await Project.findById(projectId)
    project.image = file.name || project.image
    project.save()
    return res.json(project.image)
  })
})

// @route   GET /api/projects/load-project/:projectId
// @access   private
exports.loadImage = asyH(async (req, res) => {
  try {
    const projectId = req.params.projectId
    const project = await Project.findById(projectId)
    return res.json({ image: project.image })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
})
