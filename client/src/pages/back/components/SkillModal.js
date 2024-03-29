import { useState, useEffect } from 'react'
import handleAll from '../../../utils/handleAll'
import closeModal from '../../../utils/closeModal'

function SkillModal({ target, isUpdate, addUpdate, itemData }) {
  const initialState = {
    name: '',
    value: '',
    show: false
  }

  const [skill, setSkill] = useState(initialState)

  useEffect(() => {
    if (itemData) {
      setSkill(itemData)
    }
  }, [itemData])

  const handleChange = (e) => handleAll(e, { st: skill, setSt: setSkill })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (itemData) {
      addUpdate(skill)
    }

    if (!isUpdate) {
      addUpdate(skill)

      const clearSt = {}
      for (const prop in skill) {
        if (typeof skill[prop] === 'boolean') {
          clearSt[prop] = false
        } else {
          clearSt[prop] = ''
        }
      }

      setSkill(clearSt)
    }

    closeModal(target)
  }

  return (
    <div className='modal fade' id={target} tabIndex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true' >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>

            <h5 className='modal-title' id='exampleModalLabel'>{isUpdate ? 'Update Skill' : 'New Skill'}</h5>

            <button type='button' className='close' data-dismiss='modal' aria-label='Close' >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='form-group'>

                <label htmlFor='name'>Name:</label>
                <input value={skill.name} onChange={handleChange} name='name' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor=''>Value</label>
                <input value={skill.value} onChange={handleChange} name='value' className='form-control-range' type='range' min='0' max='100' />

              </div>

            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-dismiss='modal' > Close </button>
              <button type='submit' className='btn btn-primary'>Save</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export default SkillModal
