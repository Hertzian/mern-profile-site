import { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/AdminFooter'
import '../../styles/back.css'

class Login extends Component {
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
    console.log(this.state)
  }

  render() {
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
                          <Link
                            className='btn btn-primary ml-2'
                            to='/admin/profile'
                          >
                            pass...
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id='layoutAuthentication_footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Login
