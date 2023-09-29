import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import AdminFooter from './partials/AdminFooter'
import Alert from '../../components/Alert'
import { useActions } from '../../hooks/useActions'
import '../../styles/back.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { login } = useActions()
  const { isAuthenticated } = useSelector((state) => state.user)
  const { email, password } = formData

<<<<<<< Updated upstream:client2/src/pages/back/Login.js
  constructor (props) {
    super(props)
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    this.verify()
  }

  async verify () {
    try {
      const token = hasToken()
      const res = await axios.post('/api/users/verify', { localToken: token })
      const tokenRes = res.data.verifiqueichons
      if (token && tokenRes) {
        const localToken = localStorage.getItem('token')
        setAuthToken(localToken)
        this.context.authorize()
        this.context.loadUser()
        this.props.history.push('/admin/profile')
      }
    } catch (err) {
      console.log(err)
    }
  }

  async handleSubmit (e) {
=======
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
>>>>>>> Stashed changes:client/src/pages/back/Login.js
    e.preventDefault()
    login(formData)
  }

<<<<<<< Updated upstream:client2/src/pages/back/Login.js
  render () {
    return (
      <div className='bg-dark' id='layoutAuthentication'>
        <div id='layoutAuthentication_content'>
          <main>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-lg-5'>
                  <div className='card shadow-lg border-0 rounded-lg mt-5'>
                    <div className='card-header'>
                      <h3 className='text-center font-weight-light my-4'>
                        Welcome again!
                      </h3>
                    </div>
                    <div className='card-body'>
                      <form onSubmit={this.handleSubmit}>
                        <div className='form-grop'>
                          <label htmlFor='email'>Email</label>
                          <input
                            value={this.state.email}
                            name='email'
                            type='email'
                            className='form-control'
                            placeholder='Email'
                            onChange={this.handleChange}
                          />
                        </div>
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
                        <div className='form-group d-flex align-items-center mt-4 mb-0'>
                          <button className='btn btn-primary'>Login</button>
                          <Link className='btn ml-2' to='/'>
                            Go back
                          </Link>
                        </div>
                      </form>
                    </div>
=======
  if (isAuthenticated) {
    return <Navigate to={'/admin/profile'} />
  }

  return (
    <div className='bg-dark' id='layoutAuthentication'>
      <div id='layoutAuthentication_content'>
        <main>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-5'>
                <div className='card shadow-lg border-0 rounded-lg mt-5'>
                  <div className='card-header'>
                    <h3 className='text-center font-weight-light my-4'>
                      Welcome again!
                    </h3>
                    <Alert />
                  </div>
                  <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                          value={email}
                          name='email'
                          type='email'
                          className='form-control'
                          placeholder='Email'
                          onChange={handleChange}
                        />
                      </div>
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
                      <div className='form-group d-flex align-items-center mt-4 mb-0'>
                        <button className='btn btn-primary'>Login</button>
                        <Link className='btn ml-2' to='/'>
                          Go back
                        </Link>
                      </div>
                    </form>
>>>>>>> Stashed changes:client/src/pages/back/Login.js
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id='layoutAuthentication_footer'>
        <AdminFooter />
      </div>
    </div>
  )
}

Login.propTypes = {
  // login: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool
}

export default Login
