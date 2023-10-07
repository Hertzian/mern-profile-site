const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const projectsController = require('../controllers/projectsController')

router.get('/get-all', projectsController.getProjects)
router.get('/get-project/:projectId', projectsController.getProject)
router.post('/new-project/', projectsController.newProject)
router.put('/update-project/:projectId', projectsController.updateProject)
router.delete('/delete-project/:projectId', projectsController.deleteProject)
router.post('/upload-project/:projectId', projectsController.uploadImage)
router.get('/load-project/:projectId', projectsController.loadImage)

module.exports = router
