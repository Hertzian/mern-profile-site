const { unlink } = require('fs/promises')
const path = require('path')
const { Project } = require('../lib/db/models')

// @route   GET /api/projects/get-all
// @access   private
exports.getProjects = async (req, res) => {
  console.log(Project)
  const projects = await Project.findAll()

  res.json({ projects, success: true })
}

// @route   GET /api/projects/get-project/:projectId
// @access   private
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    return res.json({ project })
  } catch (err) {
    return res.json(err)
  }
}

// @route   POST /api/projects/new-project
// @access   private
exports.newProject = async (req, res) => {
  try {
    const { name, url, repo, description, show } = req.body
    const user = req.user
    const project = await Project.create({
      userId: user.id,
      ...req.body
    })
    // const project = await Project.create({
    //   name,
    //   url,
    //   repo,
    //   image,
    //   description,
    //   show
    // })
    console.log(project)
    return res.json({ message: 'Project created!', project })
  } catch (err) {
    return res.json(err)
  }
}

// @route   PUT /api/projects/update-project/:projectId
// @access   private
exports.updateProject = async (req, res) => {
  try {
    const { name, url, repo, image, description, show } = req.body
    const project = await Project.findByPk(req.params.projectId)
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
}

// @route   DELETE /api/projects/delete-project/:projectId
// @access   private
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.projectId
    const project = await Project.findByPk(projectId)
    if (project.image !== 'placeholder.jpg') {
      await unlink(
        `${path.resolve(__dirname, '../public/uploads')}/${project.image}`
      )
    }
    await project.remove()
    return res.json({ message: `Project gone, ${projectId}` })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   POST /api/projects/upload-project/:projectId
// @access   private
exports.uploadImage = async (req, res) => {
  const file = req.files.project
  const projectId = req.params.projectId

  if (!req.files || Object.keys(req.files).length === 0) { return res.json({ err: 'No file were uploaded' }) }

  file.name = `project-${projectId}${path.parse(file.name).ext}`
  const uploadPath = `${path.resolve(__dirname, '../public/uploads')}/${file.name
    }`

  file.mv(uploadPath, async (err) => {
    if (err) {
      console.error(err)
      return res.json({ err: 'Problem with your file upload' })
    }
    const project = await Project.findByPk(projectId)
    project.image = file.name || project.image
    project.save()
    return res.json(project.image)
  })
}

// @route   GET /api/projects/load-project/:projectId
// @access   private
exports.loadImage = async (req, res) => {
  try {
    const projectId = req.params.projectId
    const project = await Project.findByPk(projectId)
    return res.json({ image: project.image })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}
