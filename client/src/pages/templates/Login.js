import { Link } from 'react-router-dom'
import Footer from '../../components/AdminFooter'
import TextInput from '../../components/TextInput'
import '../../styles/back.css'

const Login = () => {
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
                    <form>
                      <TextInput
                        placeholder='Your email mastah'
                        lbl='Email'
                        type='text'
                        input='email'
                      />
                      <TextInput
                        lbl='Password'
                        type='password'
                        input='password'
                      />

                      <div className='form-group d-flex align-items-center mt-4 mb-0'>
                        <Link className='btn btn-primary' to={'admin/profile'}>
                          Login
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

export default Login
