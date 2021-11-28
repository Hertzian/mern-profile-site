import { Component } from 'react'

class ConfirmModal extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  closeModal() {
    const modal = document.getElementById(this.props.target)
    modal.classList.remove('show', 'd-block')
    modal.style = 'display: none'
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('role')
    modal.removeAttribute('aria-modal')
    document.querySelectorAll('.modal-open').forEach((el) => {
      el.classList.remove('modal-open')
    })
    document.querySelectorAll('.modal-backdrop').forEach((el) => {
      el.remove()
    })
  }

  handleSubmit(e) {
    const { itemId, confirmFunction } = this.props
    e.preventDefault()
    confirmFunction(itemId)
    this.closeModal()
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
                  Save
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
