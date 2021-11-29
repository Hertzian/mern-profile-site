import { Component } from 'react'
import closeModal from '../utils/closeModal'

class ConfirmModal extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const { itemId, confirmFunction, target } = this.props
    e.preventDefault()
    confirmFunction(itemId)
    closeModal(target)
  }

  render() {
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
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit}>
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
}

export default ConfirmModal
