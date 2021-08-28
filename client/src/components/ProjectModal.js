import TextInput from './TextInput'

const ProjectModal = () => {
  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Project
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
            <div className='modal-body'>
              <form>
                <TextInput lbl='Company' input='company' />
                <TextInput lbl='Job' input='job' />
                <TextInput lbl='Year' input='year' />

                <div className='form-group'>
                  <label htmlFor='show'>Do you want to show?</label>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='show'
                    />
                    <label className='form-check-label' htmlFor='showYes'>
                      Yes
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='show'
                    />
                    <label className='form-check-label' htmlFor='showNo'>
                      No
                    </label>
                  </div>
                </div>
              </form>

              <button type='button' className='btn btn-primary'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectModal
