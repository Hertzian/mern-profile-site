import { Component } from 'react'
import axios from 'axios'
import Card from '../../../../components/Card'

class Access extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const res = await axios('/api/users/read-access')
    this.setState({ email: res.data.email })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  async updateAccess(userData) {
    const res = await axios.put('/api/users/update-access', userData)
    const resData = res.data.email
    console.log(resData)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.updateAccess(this.state)
    this.setState({ password: '' })
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
                  //type='email'
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
          <button className='btn btn-primary mt-2'>Update</button>
        </form>
      </Card>
    )
  }
}

export default Access
