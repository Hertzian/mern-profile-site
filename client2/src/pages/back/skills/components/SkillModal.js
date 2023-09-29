import { Component } from 'react'
import axios from 'axios'
import closeModal from '../../../../utils/closeModal'

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
      name: '',
      value: '',
      show: 'no'
    })
  }

  handleSubmit (e) {
    const { addUpdateSkill, isModify, skillId, target } = this.props
    e.preventDefault()
    if (isModify) {
      addUpdateSkill(skillId, this.state)
      closeModal(target)
    } else {
      addUpdateSkill(this.state)
      closeModal(target)
      this.clearState()
    }
  }

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
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
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
        </div>
      </div>
    )
  }
}

export default SkillModal
