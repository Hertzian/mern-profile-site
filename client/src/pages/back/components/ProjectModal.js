import { useState, useEffect } from 'react'
import handleAll from '../../../utils/handleAll'
import closeModal from '../../../utils/closeModal'

function ProjectModal({ target, isUpdate, addUpdate, itemData }) {
  const initialState = {
    name: '',
    url: '',
    repo: '',
    //image: '',
    description: '',
    show: false
  }

  const [project, setProject] = useState(initialState)

  useEffect(() => {
    if (itemData) {
      setProject(itemData)
    }
  }, [itemData])

  const handleChange = (e) => handleAll(e, { st: project, setSt: setProject })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (itemData) {
      addUpdate(project)
    }

    if (!isUpdate) {
      addUpdate(project)

      const clearSt = {}
      for (const prop in project) {
        if (typeof project[prop] === 'boolean') {
          clearSt[prop] = false
        } else {
          clearSt[prop] = ''
        }
      }

      setProject(clearSt)
    }

    closeModal(target)
  }

  return (
    <div className='modal fade' id={target} tabIndex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true' >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>

            <h5 className='modal-title' id='exampleModalLabel'>{isUpdate ? 'Update Project' : 'New Project'}</h5>

            <button type='button' className='close' data-dismiss='modal' aria-label='Close' >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='modal-body'>
              <div className='form-group'>

                <label htmlFor='name'>Name:</label>
                <input value={project.name} onChange={handleChange} name='name' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='url'>url:</label>
                <input value={project.url} onChange={handleChange} name='url' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='repo'>Repo:</label>
                <input value={project.repo} onChange={handleChange} name='repo' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='description'>Description:</label>
                <textarea value={project.description} onChange={handleChange} name='description' className='form-control' cols='20' rows='3' />

              </div>

            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal' >Close</button>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export default ProjectModal
