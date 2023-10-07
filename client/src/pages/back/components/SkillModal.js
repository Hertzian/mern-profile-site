import { useState } from 'react'
import closeModal from '../../../utils/closeModal'

function SkillModal(props) {
  const [skill, setSkill] = useState({
    _id: '',
    name: '',
    value: '',
    show: 'no'
  })

  const handleChange = (e) => { }
  const clearskill = () => { }
  const handleSubmit = () => { }

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
                    value={'yes'}
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
                    value={'no'}
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
export default SkillModal
