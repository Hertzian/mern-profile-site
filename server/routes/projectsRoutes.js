const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getProjects, getProject, newProject, updateProject, deleteProject, uploadImage, loadImage } = require('../controllers/projectsController')
const { upload } = require('../utils/uploadImages')

router
  .get('/', protect, getProjects)
  .post('/', protect, newProject)
router
  .get('/:projectId', getProject)
  .put('/:projectId', protect, updateProject)
  .delete('/:projectId', protect, deleteProject)

router
  .post('/image/:projectId', protect, uploadImage)
  .get('/image/:projectId', protect, loadImage)

module.exports = router
