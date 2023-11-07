const { Skill } = require('../lib/db/models')

// @route   GET /api/skills
// @access   private
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll()
    return res.json({ skills })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   POST /api/skills
// @access   private
exports.newSkill = async (req, res) => {
  try {
    const { name, value, show } = req.body
    const skill = await Skill.create({ name, value, show, userId: req.user.id })
    return res.json({ msg: 'Skill created!', skill })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   PUT /api/skills/:skillId
// @access   private
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.skillId)
    const propsToUpdate = Object.keys(req.body)

    for (const prop of propsToUpdate) {
      if (prop === 'id') continue
      if (req.body[prop]) {
        skill[prop] = req.body[prop]
      }
      if (typeof req.body[prop] === 'boolean') {
        skill[prop] = req.body[prop]
      }
    }

    await skill.save()

    return res.json({ msg: 'Skill updated!', skill })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}

// @route   DELETE /api/skills/:skillId
// @access   private
exports.deleteSkill = async (req, res) => {
  try {
    const skillId = req.params.skillId
    const skill = await Skill.findByPk(skillId)
    await skill.destroy()
    return res.json({ skill: skillId, msg: `ALV skill ${skillId}` })
  } catch (err) {
    console.log(err)
    return res.json(err)
  }
}
