import { useState } from 'react'

function ProjectModal(props) {
  const [project, setProject] = useState({
    _id: '',
    name: '',
    url: '',
    repo: '',
    //image: '',
    description: '',
    show: 'no'
  })

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

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
              {props.isModify ? 'Update Project' : 'New Project'}
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
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='modal-body'>
              <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input
                  name='name'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={project.name}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='url'>url:</label>
                <input
                  name='url'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={project.url}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='repo'>Repo:</label>
                <input
                  name='repo'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={project.repo}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='description'>Description:</label>
                <textarea
                  className='form-control'
                  name='description'
                  value={project.description}
                  onChange={handleChange}
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
                    checked={project.show === 'yes'}
                    onChange={handleChange}
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
                    checked={project.show === 'no'}
                    onChange={handleChange}
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
export default ProjectModal
