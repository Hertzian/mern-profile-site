import { useState } from 'react'
import Card from '../../../../components/Card'

<<<<<<< Updated upstream:client2/src/pages/back/profile/components/Access.js
class Access extends Component {
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount () {
    const res = await axios('/api/users/read-access')
    this.setState({ email: res.data.email })
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  async updateAccess (userData) {
    const res = await axios.put('/api/users/update-access', userData)
    const resData = res.data.email
    console.log(resData)
  }

  handleSubmit (e) {
=======
const Access = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
>>>>>>> Stashed changes:client/src/pages/back/profile/components/Access.js
    e.preventDefault()
    console.log(formData)
  }

<<<<<<< Updated upstream:client2/src/pages/back/profile/components/Access.js
  render () {
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
                  // type='email'
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
=======
  return (
    <Card header='Credentials' title='Verify or modify your access data'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                value={email}
                name='email'
                // type='email'
                className='form-control'
                placeholder='email'
                onChange={handleChange}
              />
>>>>>>> Stashed changes:client/src/pages/back/profile/components/Access.js
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                value={password}
                name='password'
                type='password'
                className='form-control'
                placeholder='password'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className='btn btn-primary mt-2'>Update</button>
      </form>
    </Card>
  )
}

export default Access
