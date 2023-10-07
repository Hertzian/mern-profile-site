const { skill: Skill } = require('../lib/db/models')

// @route   GET /api/skills/get-all
// @access   private
exports.getSkills = async (req, res) => {
  const skills = await Skill.find({})
  return res.json({ skills })
}

// @route   GET /api/skills/get-skill/:skillId
// @access   private
exports.getSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.skillId)
    return res.json({ skill })
  } catch (err) {
    return res.json(err)
  }
}

// @route   POST /api/skills/new-skill
// @access   private
exports.newSkill = async (req, res) => {
  try {
    const { name, value, show } = req.body
    const skill = await Skill.create({ name, value, show })
    return res.json({ message: 'Skill created!', skill })
  } catch (err) {
    return res.json(err)
  }
}

// @route   PUT /api/skills/update-skill/:skillId
// @access   private
exports.updateSkill = async (req, res) => {
  try {
    const skillId = req.params.skillId
    const { name, value, show } = req.body
    const skill = await Skill.findByPk(skillId)
    skill.name = name || updatedSkill.name
    skill.value = value || updatedSkill.value
    skill.show = show || updatedSkill.show
    skill.save()
    return res.json({ message: 'Skill updated!', skill })
  } catch (err) {
    return res.json(err)
  }
}

// @route   DELETE /api/skills/delete-skill/:skillId
// @access   private
exports.deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.skillId
    const skill = await Skill.findByPk(skillId)
    await skill.remove()
    return res.json({ message: `Skill gone, ${skillId}` })
  } catch (err) {
    return res.json(err)
  }
}
