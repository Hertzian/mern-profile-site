const Skill = require('../models/skill')
const asyH = require('../utils/asyncHandler')

// @route   GET /api/skills/get-all
// @access   private
exports.getSkills = asyH(async (req, res, next) => {
  const skills = await Skill.find({})

  res.json({ skills })
})
