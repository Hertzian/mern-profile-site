import { useState } from 'react'
import Card from '../../../../components/Card'

function Access() {
  const [access, setAccess] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => setAccess({ ...access, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(access)
  }

  return (
    <Card header='Credentials' title='Verify or modify your access data'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-grop'>
              <label htmlFor='email'>Email</label>
              <input
                value={access.email}
                name='email'
                //type='email'
                className='form-control'
                placeholder='email'
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-grop'>
              <label htmlFor='password'>Password</label>
              <input
                value={access.password}
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
