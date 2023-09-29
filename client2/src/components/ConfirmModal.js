import closeModal from '../utils/closeModal'

<<<<<<< Updated upstream:client2/src/components/ConfirmModal.js
class ConfirmModal extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const { itemId, confirmFunction, target } = this.props
=======
const ConfirmModal = ({ itemId, confirmFunction, target }) => {
  const handleSubmit = (e) => {
>>>>>>> Stashed changes:client/src/components/ConfirmModal.js
    e.preventDefault()
    confirmFunction(itemId)
    closeModal(target)
  }

<<<<<<< Updated upstream:client2/src/components/ConfirmModal.js
  render () {
    return (
      <div
        className='modal fade'
        id={this.props.target}
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
=======
  return (
    <div
      className='modal fade'
      id={target}
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
>>>>>>> Stashed changes:client/src/components/ConfirmModal.js
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
