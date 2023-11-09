const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getProjects, getProject, newProject, updateProject, deleteProject, uploadImage, loadImage } = require('../controllers/projectsController')

router
  .get('/', protect, getProjects)
  .post('/', protect, newProject)
router
  .get('/:projectId', getProject)
  .put('/:projectId', protect, updateProject)
  .delete('/:projectId', protect, deleteProject)

// to do...
router.post('/upload-project/:projectId', protect, uploadImage)
router.get('/load-project/:projectId', protect, loadImage)

module.exports = router
