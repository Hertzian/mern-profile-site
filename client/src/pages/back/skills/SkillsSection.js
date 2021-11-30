import { Component } from 'react'
import axios from 'axios'
import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import ButtonOpenModal from '../../../components/ButtonOpenModal'
import SkillModal from './components/SkillModal'
import ConfirmModal from '../../../components/ConfirmModal'

class SkillsSection extends Component {
  constructor(props) {
    super(props)
    this.state = { skills: [] }
    this.newSkill = this.newSkill.bind(this)
    this.updateSkill = this.updateSkill.bind(this)
    this.deleteSkill = this.deleteSkill.bind(this)
  }

  async componentDidMount() {
    const res = await axios.get(`/api/skills/get-all`)
    const skills = res.data.skills
    this.setState({ ...this.state, skills })
  }

  async newSkill(newSkill) {
    const res = await axios.post('/api/skills/new-skill', newSkill)
    const resSkill = res.data.skill
    this.setState({ skills: [...this.state.skills, resSkill] })
  }
  async updateSkill(skillId, updatedSkill) {
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
  async deleteSkill(skillId) {
    await axios.delete(`/api/skills/delete-skill/${skillId}`)
    this.setState({
      skills: this.state.skills.filter((skill) => skill._id !== skillId)
    })
  }

  render() {
    //console.log(this.state)
    const skills = this.state.skills.map((skill) => {
      const { name, value, show, _id } = skill
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{value}</td>
          <td>{show}</td>
          <td>
            <ButtonOpenModal
              target={`update-skill-${_id}`}
              color='primary mr-2'
              label='Update'
            />
            <SkillModal
              target={`update-skill-${_id}`}
              isModify={true}
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
        <Card header={'Skills'}>
          <ButtonOpenModal
            target='new-skill'
            color='primary mb-2'
            label='New Skill'
          />
          <SkillModal
            target='new-skill'
            isModify={false}
            addUpdateSkill={this.newSkill}
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
            <tbody>{skills}</tbody>
          </table>
        </Card>
      </AdminPage>
    )
  }
}

export default SkillsSection
