const { unlink } = require('fs/promises')
const path = require('path')
const { Project } = require('../lib/db/models')

// @route   GET /api/projects
// @access   private
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll()
    return res.json({ projects })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   GET /api/projects/:projectId
// @access   private
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId)
    return res.json(project)
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   POST /api/projects
// @access   private
exports.newProject = async (req, res) => {
  try {
    const { name, url, repo, description, show } = req.body
    const project = await Project.create({
      userId: req.user.id,
      name, url, repo, description, show
    })

    return res.json({ msg: 'Project created!', project })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   PUT /api/projects/:projectId
// @access   private
exports.updateProject = async (req, res) => {
  try {
    const { name, url, repo, image, description, show } = req.body
    const project = await Project.findByPk(req.params.projectId)
    const propsToUpdate = Object.keys(req.body)

    for (const prop of propsToUpdate) {
      if (prop === 'id') continue
      if (req.body[prop]) {
        project[prop] = req.body[prop]
      }
      if (typeof req.body[prop] === 'boolean') {
        project[prop] = req.body[prop]
      }
    }

    await project.save()

    return res.json({ msg: 'Project updated!', project })
  } catch (err) {
    return res.json(err)
  }
}

// @route   DELETE /api/projects/:projectId
// @access   private
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.projectId
    const project = await Project.findByPk(projectId)

    // pending this block
    if (project.image !== 'placeholder.jpg') {
      await unlink(
        `${path.resolve(__dirname, '../public/uploads')}/${project.image}`
      )
    }

    await project.destroy()
    return res.json({ project: projectId, msg: `ALV project, ${projectId}` })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// pending...

// @route   POST /api/projects/project/:projectId
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
