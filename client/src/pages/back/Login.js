import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import AdminFooter from './partials/AdminFooter'
import Alert from './components/Alert'
import '../../styles/back.css'
import { useLoginMutation, setLoginCredentials } from '../../store'
import { siteName } from '../../config/menuConfig'

const Login = () => {
  const dispatch = useDispatch()
  const [login] = useLoginMutation()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData

  const token = useSelector(({ authSlice }) => authSlice.token)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submit = await login(formData)
    dispatch(setLoginCredentials(submit.data))
  }

  if (token) {
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

                  </div>
                </div>
              </div>
            </div>
          </div >
        </main >
      </div >
      <div id='layoutAuthentication_footer'>
        <AdminFooter siteName={siteName} />
      </div>
    </div >
  )
}

Login.propTypes = {
  // login: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool
}

export default Login
