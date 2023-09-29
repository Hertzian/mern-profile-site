import { useState } from 'react'
import closeModal from '../../../../utils/closeModal'

<<<<<<< Updated upstream:client2/src/pages/back/skills/components/SkillModal.js
class SkillModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      _id: '',
      name: '',
      value: '',
      show: 'no'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    this.props.skillId && this.getSkill(this.props.skillId)
  }

  async getSkill (skillId) {
    const res = await axios.get(`/api/skills/get-skill/${skillId}`)
    const skill = res.data.skill
    this.setState(skill)
  }

  handleChange (e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  clearState () {
    this.setState({
      _id: '',
=======
const SkillModal = (props) => {
  const [skill, setSkill] = useState({})
  // const getSkill = (skillId) => {
  //   const getSkill = skills.find((skill) => skill.id === skillId)
  //   setSkill(getSkill)
  // }

  const handleChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value })
  }

  const clearState = () => {
    setSkill({
      id: '',
>>>>>>> Stashed changes:client/src/pages/back/skills/components/SkillModal.js
      name: '',
      value: '',
      show: 'no'
    })
  }

<<<<<<< Updated upstream:client2/src/pages/back/skills/components/SkillModal.js
  handleSubmit (e) {
    const { addUpdateSkill, isModify, skillId, target } = this.props
=======
  const handleSubmit = (e) => {
    const { addUpdateSkill, isModify, skillId, target } = props
>>>>>>> Stashed changes:client/src/pages/back/skills/components/SkillModal.js
    e.preventDefault()
    if (isModify) {
      addUpdateSkill(skillId, skill)
      closeModal(target)
    } else {
      addUpdateSkill(skill)
      closeModal(target)
      clearState()
    }
  }

<<<<<<< Updated upstream:client2/src/pages/back/skills/components/SkillModal.js
  render () {
    return (
      <div
        className='modal fade'
        id={this.props.target}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='ModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                {this.props.isModify ? 'Update Skill' : 'New Skill'}
              </h5>
=======
  return (
    <div
      className='modal fade'
      id={props.target}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='ModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {props.isModify ? 'Update Skill' : 'New Skill'}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input
                  name='name'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={skill.name}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Value</label>
                <input
                  name='value'
                  value={skill.value}
                  className='form-control-range'
                  type='range'
                  min='0'
                  max='100'
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='show'>Do you want to show?</label>
                <div className='form-check'>
                  <input
                    name='show'
                    value='yes'
                    className='form-check-input'
                    type='radio'
                    checked={skill.show === 'yes'}
                    onChange={handleChange}
                  />
                  <label className='form-check-label' htmlFor='yes'>
                    Yes
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    name='show'
                    value='no'
                    className='form-check-input'
                    type='radio'
                    checked={skill.show === 'no'}
                    onChange={handleChange}
                  />
                  <label className='form-check-label' htmlFor='yes'>
                    Nope
                  </label>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
>>>>>>> Stashed changes:client/src/pages/back/skills/components/SkillModal.js
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='submit' className='btn btn-primary'> Save </button>
            </div>
<<<<<<< Updated upstream:client2/src/pages/back/skills/components/SkillModal.js
            <form onSubmit={this.handleSubmit}>
              <div className='modal-body'>
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <input
                    name='name'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.name}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor=''>Value</label>
                  <input
                    name='value'
                    value={this.state.value}
                    className='form-control-range'
                    type='range'
                    min='0'
                    max='100'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='show'>Do you want to show?</label>
                  <div className='form-check'>
                    <input
                      name='show'
                      value='yes'
                      className='form-check-input'
                      type='radio'
                      checked={this.state.show === 'yes'}
                      onChange={this.handleChange}
                    />
                    <label className='form-check-label' htmlFor='yes'>
                      Yes
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      name='show'
                      value='no'
                      className='form-check-input'
                      type='radio'
                      checked={this.state.show === 'no'}
                      onChange={this.handleChange}
                    />
                    <label className='form-check-label' htmlFor='yes'>
                      Nope
                    </label>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </form>
          </div>
=======
          </form>
>>>>>>> Stashed changes:client/src/pages/back/skills/components/SkillModal.js
        </div>
      </div>
    </div>
  )
}

export default SkillModal
