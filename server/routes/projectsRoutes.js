const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getProjects, getProject, newProject, updateProject, deleteProject, uploadImage, loadImage } = require('../controllers/projectsController')

router.get('/get-all', getProjects)
router.get('/get-project/:projectId', getProject)
router.post('/new-project/', protect, newProject)
router.put('/update-project/:projectId', protect, updateProject)
router.delete('/delete-project/:projectId', protect, deleteProject)
router.post('/upload-project/:projectId', protect, uploadImage)
router.get('/load-project/:projectId', protect, loadImage)

module.exports = router
