import TextInput from './TextInput'

const SkillModal = (props) => {
  return (
    <>
      <div
        className='modal fade'
        id={props.id}
        tabIndex='-1'
        role='dialog'
        aria-labelledby={props.id}
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Skill {props.id}
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
                <TextInput lbl='Name' input='name' />
                <TextInput lbl='Value' input='value' />

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

export default SkillModal
