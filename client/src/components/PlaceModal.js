import TextInput from './TextInput'
import YesNoInput from './YesNoInput'

const PlaceModal = (props) => {
  return (
    <>
      <div
        className='modal fade'
        id={props.id}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='placeModallabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Place
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
                <YesNoInput />
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

export default PlaceModal
