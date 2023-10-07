import closeModal from '../../../utils/closeModal'

function ConfirmModal(props) {
  const handleSubmit = (e) => {
    const { itemId, confirmFunction, target } = props
    e.preventDefault()
    confirmFunction(itemId)
    closeModal(target)
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
              Delete item
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
            <div className='modal-body'>Are you sure?</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='submit' className='btn btn-primary'>
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
