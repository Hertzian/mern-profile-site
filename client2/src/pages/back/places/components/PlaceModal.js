import { useState } from 'react'
import closeModal from '../../../../utils/closeModal'

<<<<<<< Updated upstream:client2/src/pages/back/places/components/PlaceModal.js
class PlaceModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      _id: '',
      company: '',
      job: '',
      year: '',
      assignment: '',
      show: 'no'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount () {
    this.props.placeId && this.getPlace(this.props.placeId)
  }

  async getPlace (placeId) {
    try {
      const res = await axios.get(`/api/places/get-place/${placeId}`)
      const { _id, company, job, year, assignment, show } = res.data.place
      this.setState({ _id, company, job, year, assignment, show })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange (e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  clearState () {
    this.setState({
      _id: '',
=======
const PlaceModal = ({ isModify, target, placeId, addUpdatePlace }) => {
  const [place, setPlace] = useState({})

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value })
  }

  const clearState = () => {
    setPlace({
      id: '',
>>>>>>> Stashed changes:client/src/pages/back/places/components/PlaceModal.js
      company: '',
      job: '',
      year: '',
      assignment: '',
      show: ''
    })
  }

<<<<<<< Updated upstream:client2/src/pages/back/places/components/PlaceModal.js
  handleSubmit (e) {
    const { isModify, target } = this.props
=======
  const handleSubmit = (e) => {
>>>>>>> Stashed changes:client/src/pages/back/places/components/PlaceModal.js
    e.preventDefault()
    if (isModify && placeId) {
      addUpdatePlace(placeId, place)
      closeModal(target)
    } else {
      addUpdatePlace(place)
      closeModal(target)
      clearState()
    }
  }

<<<<<<< Updated upstream:client2/src/pages/back/places/components/PlaceModal.js
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
                {this.props.isModify ? 'Update Place' : 'New Place'}
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
              {isModify ? 'Update Place' : 'New Place'}
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
                  value={place.company || ''}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='job'>Job:</label>
                <input
                  name='job'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={place.job || ''}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='year'>Year:</label>
                <input
                  name='year'
                  onChange={handleChange}
                  className='form-control'
                  type='text'
                  value={place.year || ''}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='assignment'>Assignment:</label>
                <textarea
                  className='form-control'
                  name='assignment'
                  value={place.assignment || ''}
                  onChange={handleChange}
                  cols='20'
                  rows='3'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='show'>Do you want to show</label>
                <div className='form-check'>
                  <input
                    name='show'
                    value={true}
                    className='form-check-input'
                    type='radio'
                    checked={place.show === true}
                    onChange={handleChange}
                  />
                  <label className='form-check-label' htmlFor='yes'>
                    Yes
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    name='show'
                    value={false}
                    className='form-check-input'
                    type='radio'
                    checked={place.show === false}
                    onChange={handleChange}
                  />
                  <label className='form-check-label' htmlFor='yes'> Nope </label>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
>>>>>>> Stashed changes:client/src/pages/back/places/components/PlaceModal.js
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              > Close </button>
              <button type='submit' className='btn btn-primary'> Save </button>
            </div>
<<<<<<< Updated upstream:client2/src/pages/back/places/components/PlaceModal.js
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
                  <textarea
                    className='form-control'
                    name='assignment'
                    value={this.state.assignment}
                    onChange={this.handleChange}
                    cols='20'
                    rows='3'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='show'>Do you want to show</label>
                  <div className='form-check'>
                    <input
                      name='show'
                      value='yes'
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
                      value='no'
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
=======
          </form>
>>>>>>> Stashed changes:client/src/pages/back/places/components/PlaceModal.js
        </div>
      </div>
    </div>
  )
}

export default PlaceModal
