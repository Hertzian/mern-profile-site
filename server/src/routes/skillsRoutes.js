const express = require('express')
const router = express.Router()
const { userService: { protect } } = require('../utils')
const { getSkills, newSkill, updateSkill, deleteSkill } = require('../controllers/skillsController')

router
  .get('/', protect, getSkills)
  .post('/', protect, newSkill)
router
  .put('/:skillId', protect, updateSkill)
  .delete('/:skillId', protect, deleteSkill)

module.exports = router
