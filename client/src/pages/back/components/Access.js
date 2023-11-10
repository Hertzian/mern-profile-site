import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { useUpdateProfileMutation, updateStateProfile, setStateAlert } from '../../../store'

function Access({ access }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(access)
  const [updateProfile] = useUpdateProfileMutation()

  useEffect(() => {
    setFormData(access)
  }, [access])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedProfile = await updateProfile(formData)
    dispatch(updateStateProfile(updatedProfile.data))
    dispatch(setStateAlert({ msg: updatedProfile.data.msg, color: 'success' }))
  }

  return (
    formData && (
      <Card header='Credentials' title='Verify or modify your access data'>
        <form onSubmit={handleSubmit}>
          <div className='row'>

            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  value={formData.email}
                  name='email'
                  type='email'
                  className='form-control'
                  placeholder='email'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  value={formData.password}
                  name='password'
                  type='password'
                  className='form-control'
                  placeholder='*****'
                  onChange={handleChange}
                />
              </div>
            </div>

          </div>
          <button className='btn btn-primary mt-2'>Update</button>
        </form>
      </Card>
    )
  )
}

export default Access
