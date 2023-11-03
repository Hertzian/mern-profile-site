const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getProjects, getProject, newProject, updateProject, deleteProject, uploadImage, loadImage } = require('../controllers/projectsController')

router.get('/get-all', getProjects)
router.get('/get-project/:projectId', getProject)
router.post('/new-project/', newProject)
router.put('/update-project/:projectId', updateProject)
router.delete('/delete-project/:projectId', deleteProject)
router.post('/upload-project/:projectId', uploadImage)
router.get('/load-project/:projectId', loadImage)

module.exports = router
