import { Component } from 'react'
import axios from 'axios'
import closeModal from '../../../../utils/closeModal'

class ProjectModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      name: '',
      url: '',
      repo: '',
      image: '',
      description: '',
      show: 'no'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    this.props.projectId && this.getProject(this.props.projectId)
  }
  async getProject(projectId) {
    const res = await axios.get(`/api/projects/get-project/${projectId}`)
    const project = res.data.project
    this.setState(project)
  }

  handleSubmit(e) {
    const { projectId, addUpdateProject, target, isModify } = this.props
    e.preventDefault()
    if (isModify) {
      addUpdateProject(projectId, this.state)
      closeModal(target)
    } else {
      addUpdateProject(this.state)
      closeModal(target)
    }
  }
  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  render() {
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
                {this.props.isModify ? 'Update Project' : 'New Project'}
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
            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
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
                  <label htmlFor='url'>url:</label>
                  <input
                    name='url'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.url}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='repo'>Repo:</label>
                  <input
                    name='repo'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.repo}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>Description:</label>
                  <textarea
                    className='form-control'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    cols='20'
                    rows='3'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <label htmlFor='show'>Do you want to show?</label>
                  <div className='form-check'>
                    <input
                      name='show'
                      value={'yes'}
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
                      value={'no'}
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

export default ProjectModal
