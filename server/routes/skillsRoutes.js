const express = require('express')
const router = express.Router()
const skillsController = require('../controllers/skillsController')

router.get('/get-all', skillsController.getSkills)

module.exports = router
