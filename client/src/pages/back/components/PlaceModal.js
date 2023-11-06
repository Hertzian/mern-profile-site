import { useState, useEffect } from 'react'
import handleAll from '../../../utils/handleAll'
import closeModal from '../../../utils/closeModal'

function PlaceModal({ target, isUpdate, addUpdatePlace, placeData }) {
  const initialState = {
    company: '',
    job: '',
    year: '',
    assignment: '',
    show: false
  }

  const [place, setPlace] = useState(initialState)

  useEffect(() => {
    if (placeData) {
      setPlace(placeData)
    }
  }, [placeData])

  const handleChange = (e) => handleAll(e, { st: place, setSt: setPlace })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (placeData) {
      await addUpdatePlace(place)
    }

    if (!isUpdate) {
      await addUpdatePlace(place)

      const clearSt = {}
      for (const prop in place) {
        clearSt[prop] = ''
      }

      setPlace(clearSt)
    }

    closeModal(target)
  }

  return (
    <div id={target} className='modal fade' tabIndex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true' >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>

            <h5 className='modal-title' id='exampleModalLabel'> {isUpdate ? 'Update Place' : 'New Place'} </h5>

            <button type='button' className='close' data-dismiss='modal' aria-label='Close' >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='form-group'>

                <label htmlFor='company'>Company:</label>
                <input value={place.company} onChange={handleChange} name='company' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='job'>Job:</label>
                <input value={place.job} onChange={handleChange} name='job' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='year'>Year:</label>
                <input value={place.year} onChange={handleChange} name='year' className='form-control' type='text' />

              </div>
              <div className='form-group'>

                <label htmlFor='assignment'>Assignment:</label>
                <textarea value={place.assignment} onChange={handleChange} name='assignment' className='form-control' cols='20' rows='3' />

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

export default PlaceModal
