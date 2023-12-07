const { unlink, access } = require('fs/promises')
const path = require('path')
const multer = require('multer')
const { uploadImages } = require('../utils')
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

    if (project.image !== 'placeholder.jpg' && project.image) {
      const filePath = `${path.resolve(__dirname, '../public/uploads')}/${project.image}`

      try {
        await access(filePath)
        await unlink(filePath)
      } catch (err) {
        console.log(err)
        console.log('Image not found')
      }
    }

    await project.destroy()
    return res.json({ id: projectId, msg: `ALV project, ${projectId}` })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// pending...

// @route   POST /api/projects/:projectId
// @access   private
exports.uploadImage = async (req, res) => {
  const projectId = req.params.projectId

  const saveImage = uploadImages.upload('image', `projects-${projectId}`)

  saveImage(req, res, async (err) => {
    const image = req.file

    if (err instanceof multer.MulterError) {
      return res.json({ err: 'Error when uploading' })
    } else if (err) {
      return res.json({ err })
    }

    const project = await Project.findByPk(projectId)
    const oldImage = project.image
    project.image = `/uploads/${image?.filename}`

    await project.save()
    try {
      if (oldImage.split('/')[2] !== 'undefined' || null) {
        await unlink('./server' + oldImage)
      }
    } catch (err) {
      /* expected if file doesnt exists */
      if (err.code === 'ENOENT') {
        return res.json(project)
      }
      return res.json({ err: 'IDFK ' + err })
    }

    return res.json(project)
  })
}

// @route   GET /api/projects/image/:projectId
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
