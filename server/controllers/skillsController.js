const Skill = require('../models/skill')
const asyH = require('../utils/asyncHandler')

exports.getSkills = asyH(async (req, res, next) => {
  const skills = await Skill.find({})

  res.json({ skills, success: true })
})
