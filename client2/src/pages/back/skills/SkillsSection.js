import { useState } from 'react'
import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import ButtonOpenModal from '../../../components/ButtonOpenModal'
import SkillModal from './components/SkillModal'
import ConfirmModal from '../../../components/ConfirmModal'
import { dummyData } from '../../../dummyEndpoints'

<<<<<<< Updated upstream:client2/src/pages/back/skills/SkillsSection.js
class SkillsSection extends Component {
  constructor (props) {
    super(props)
    this.state = { skills: [] }
    this.newSkill = this.newSkill.bind(this)
    this.updateSkill = this.updateSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
  }

  async componentDidMount () {
    const res = await axios.get('/api/skills/get-all')
    const skills = res.data.skills
    this.setState({ ...this.state, skills })
  }

  async newSkill (newSkill) {
    const res = await axios.post('/api/skills/new-skill', newSkill)
    const resSkill = res.data.skill
    this.setState({ skills: [...this.state.skills, resSkill] })
  }

  async updateSkill (skillId, updatedSkill) {
    const res = await axios.put(
      `/api/skills/update-skill/${skillId}`,
      updatedSkill
    )
    const resSkill = res.data.skill
    const updatedSkills = this.state.skills.map((skill) => {
      if (skill._id === skillId) return resSkill
      return skill
    })
    this.setState({ skills: updatedSkills })
  }

  async deleteSkill (skillId) {
    await axios.delete(`/api/skills/delete-skill/${skillId}`)
    this.setState({
      skills: this.state.skills.filter((skill) => skill._id !== skillId)
    })
  }

  render () {
    const skills = this.state.skills.map((skill) => {
      const { name, value, show, _id } = skill
      const showIcon =
        show === 'yes'
          ? (
            <td className='text-success'>
              <i className='far fa-check-circle fa-2x' />
            </td>
            )
          : (
            <td className='text-danger'>
              <i className='far fa-times-circle fa-2x' />
            </td>
            )
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{value}</td>
          {showIcon}
          <td>
            <ButtonOpenModal
              target={`update-skill-${_id}`}
              color='primary mr-2'
              label='Update'
            />
            <SkillModal
              target={`update-skill-${_id}`}
              isModify
              skillId={_id}
              addUpdateSkill={this.updateSkill}
            />
            <ButtonOpenModal
              target={`confirm-skill-${_id}`}
              color='danger mr-2'
              label='X'
            />
            <ConfirmModal
              confirmFunction={this.deleteSkill}
              itemId={_id}
              target={`confirm-skill-${_id}`}
            />
          </td>
        </tr>
      )
    })

    return (
      <AdminPage {...this.propsprops}>
        <Card header='Skills'>
=======
const SkillsSection = (props) => {
  const { skills: dummySkills } = dummyData
  const [skills, setSkills] = useState(dummySkills)

  const newSkill = (newSkill) => {
    setSkills({ ...skills, newSkill })
  }

  const updateSkill = (skillId, updatedSkill) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === skillId) {
        return updateSkill
      }
      console.log(skill)
      return skill
    })
    setSkills({ ...skills, updatedSkills })
  }

  const deleteSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill.id !== skillId))
  }

  const renderSkills = skills && skills.map((skill) => {
    const { name, value, show, id } = skill
    const showIcon =
      show
        ? (<td className='text-success'> <i className='far fa-check-circle fa-2x' /> </td>)
        : (<td className='text-danger'> <i className='far fa-times-circle fa-2x' /> </td>)

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{value}</td>
        {showIcon}
        <td>
>>>>>>> Stashed changes:client/src/pages/back/skills/SkillsSection.js
          <ButtonOpenModal
            target={`update-skill-${id}`}
            color='primary mr-2'
            label='Update'
          />
          <SkillModal
            target={`update-skill-${id}`}
            isModify
            skillId={id}
            addUpdateSkill={updateSkill}
          />
          <ButtonOpenModal
            target={`confirm-skill-${id}`}
            color='danger mr-2'
            label='X'
          />
          <ConfirmModal
            confirmFunction={deleteSkill}
            itemId={id}
            target={`confirm-skill-${id}`}
          />
        </td>
      </tr>
    )
  })

  return (
    <AdminPage {...props}>
      <Card header='Skills'>
        <ButtonOpenModal
          target='new-skill'
          color='primary mb-2'
          label='New Skill'
        />
        <SkillModal
          target='new-skill'
          isModify={false}
          addUpdateSkill={newSkill}
        />

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Value</th>
              <th scope='col'>Show</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>{renderSkills}</tbody>
        </table>
      </Card>
    </AdminPage>
  )
}

export default SkillsSection
