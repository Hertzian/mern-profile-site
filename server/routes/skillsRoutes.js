const express = require('express')
const router = express.Router()
const skillsController = require('../controllers/skillsController')

router.get('/get-all', skillsController.getSkills)
router.get('/get-skill/:skillId', skillsController.getSkill)
router.post('/new-skill/', skillsController.newSkill)
router.delete('/delete-skill/:skillId', skillsController.deleteSkill)

module.exports = router
