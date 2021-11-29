const Skill = require('../models/skill')
const asyH = require('../utils/asyncHandler')

// @route   GET /api/skills/get-all
// @access   private
exports.getSkills = asyH(async (req, res) => {
  const skills = await Skill.find({})
  return res.json({ skills })
})

// @route   GET /api/skills/get-skill/:skillId
// @access   private
exports.getSkill = asyH(async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.skillId)
    return res.json({ skill })
  } catch (err) {
    return res.json(err)
  }
})

// @route   POST /api/skills/new-skill
// @access   private
exports.newSkill = asyH(async (req, res) => {
  try {
    const { name, value, show } = req.body
    const skill = await Skill.create({ name, value, show })
    return res.json({ message: 'Skill created!', skill })
  } catch (err) {
    return res.json(err)
  }
})

// @route   DELETE /api/skills/delete-skill/:skillId
// @access   private
exports.deleteSkill = asyH(async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.skillId)
    await skill.remove()
    return res.json({ message: `Skill gone, ${skillId}` })
  } catch (err) {
    return res.json(err)
  }
})
