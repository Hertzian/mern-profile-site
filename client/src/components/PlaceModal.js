import { Component } from 'react'
import axios from 'axios'

class PlaceModal extends Component {
  constructor(props) {
    super(props)
    this.state = { company: '', job: '', year: '', assignment: '', show: 'no' }
    //this.state = {
    //company: this.props.company,
    //job: this.props.job,
    //year: this.props.year,
    //assignment: this.props.assignment,
    //show: this.props.show || 'no'
    //}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.props.isModify) {
      console.log('isModify: ', this.props.isModify)
      console.log(this.state)
    } else {
      axios.post('/api/places/new-place', this.state).then((r) => {
        this.setState({
          company: '',
          job: '',
          year: '',
          assignment: '',
          show: ''
        })
        console.log('server: ', r.data)
        console.log('data submited!')
      })
    }
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
                Modal title
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
              <div className='modal-body'>
                <div className='form-group'>
                  <label htmlFor='company'>Company:</label>
                  <input
                    name='company'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.company}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='job'>Job:</label>
                  <input
                    name='job'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.job}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='year'>Year:</label>
                  <input
                    name='year'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.year}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='assignment'>Assignment:</label>
                  <input
                    name='assignment'
                    onChange={this.handleChange}
                    className='form-control'
                    type='text'
                    value={this.state.assignment}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='show'>Do you want to show</label>
                  <div className='form-check'>
                    <input
                      name='show'
                      value={'yes'}
                      className='form-check-input'
                      type='radio'
                      checked={this.state.show === 'yes'}
                      onChange={this.handleChange}
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
                      checked={this.state.show === 'no'}
                      onChange={this.handleChange}
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
}

export default PlaceModal
