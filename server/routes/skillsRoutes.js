const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getSkills, getSkill, newSkill, updateSkill, deleteSkill } = require('../controllers/skillsController')

router.get('/get-all', getSkills)
router.get('/get-skill/:skillId', getSkill)
router.post('/new-skill/', newSkill)
router.put('/update-skill/:skillId', updateSkill)
router.delete('/delete-skill/:skillId', deleteSkill)

module.exports = router
