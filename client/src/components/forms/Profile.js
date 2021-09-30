import { Component } from 'react'
import Card from '../Card'

class Profile extends Component {
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('this are the values', this.state)
  }

  render() {
    return (
      <Card header='Profile' title='Check all your data master ;D'>
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
          <button className='btn btn-primary mt-2'>Save</button>
        </form>
      </Card>
    )
  }
}

export default Profile