import { Component } from 'react'
import axios from 'axios'
import Card from '../../../../components/Card'
import { UserContext } from '../../../../context/UserContext'
import Alert from '../../../../components/Alert'

class Profile extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      github: '',
      linkedin: '',
      phone: '',
      bio: '',
      profession: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    this.state && this.getProfile()
  }

  async getProfile() {
    const res = await axios.get('/api/users/profile')
    const resUser = res.data.user
    this.setState(resUser)
  }
  async updateProfile(userData) {
    const res = await axios.put(`/api/users/profile`, userData)
    const resUser = res.data.user
    this.setState(resUser)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.updateProfile(this.state)
  }

  render() {
    return (
      <Card header='Profile' title='Check all your data master ;D'>
        <Alert message='This is an alert example' color='primary' />
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-grop'>
                <label htmlFor='name'>Name</label>
                <input
                  value={this.state.name}
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-grop'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  value={this.state.lastname}
                  name='lastname'
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-grop'>
                <label htmlFor='github'>Github</label>
                <input
                  value={this.state.github}
                  name='github'
                  type='text'
                  className='form-control'
                  placeholder='Github'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-grop'>
                <label htmlFor='linkedin'>Linkedin</label>
                <input
                  value={this.state.linkedin}
                  name='linkedin'
                  type='text'
                  className='form-control'
                  placeholder='Linkedin'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-grop'>
                <label htmlFor='phone'>Phone number</label>
                <input
                  value={this.state.phone}
                  name='phone'
                  type='text'
                  className='form-control'
                  placeholder='Phone'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='bio'>Bio</label>
                <textarea
                  className='form-control'
                  name='bio'
                  value={this.state.bio}
                  onChange={this.handleChange}
                  cols='20'
                  rows='3'
                ></textarea>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='profession'>Profession</label>
                <textarea
                  className='form-control'
                  name='profession'
                  value={this.state.profession}
                  onChange={this.handleChange}
                  cols='20'
                  rows='3'
                ></textarea>
              </div>
            </div>
          </div>
          <button className='btn btn-primary mt-2'>Update</button>
        </form>
      </Card>
    )
  }
}

export default Profile
