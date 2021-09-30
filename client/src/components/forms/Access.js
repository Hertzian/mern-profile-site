import { Component } from 'react'
import Card from '../Card'

class Access extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('access', this.state)
  }

  render() {
    return (
      <Card header='Credentials' title='Verify or modify your access data'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-grop'>
                <label htmlFor='email'>Email</label>
                <input
                  value={this.state.email}
                  name='email'
                  type='email'
                  className='form-control'
                  placeholder='email'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-grop'>
                <label htmlFor='password'>Password</label>
                <input
                  value={this.state.password}
                  name='password'
                  type='password'
                  className='form-control'
                  placeholder='password'
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button className='btn btn-primary mt-2'>Save</button>
        </form>
      </Card>
    )
  }
}

export default Access
