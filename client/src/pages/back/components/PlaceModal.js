import { useState } from 'react'

function PlaceModal(props) {
  const [place, setPlace] = useState({
    _id: '',
    company: '',
    job: '',
    year: '',
    assignment: '',
    show: 'no'
  })

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value })
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
              {place.isModify ? 'Update Place' : 'New Place'}
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
                <label htmlFor='company'>Company:</label>
                <input
                  name='company'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={place.company}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='job'>Job:</label>
                <input
                  name='job'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={place.job}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='year'>Year:</label>
                <input
                  name='year'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={place.year}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='assignment'>Assignment:</label>
                <textarea
                  className='form-control'
                  name='assignment'
                  value={place.assignment}
                  onChange={handleChange}
                  cols='20'
                  rows='3'
                ></textarea>
              </div>
              <div className='form-group'>
                <label htmlFor='show'>Do you want to show</label>
                <div className='form-check'>
                  <input
                    name='show'
                    value={'yes'}
                    className='form-check-input'
                    type='radio'
                    checked={place.show === 'yes'}
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
                    checked={place.show === 'no'}
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

export default PlaceModal
