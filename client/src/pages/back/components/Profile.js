import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { useUpdateProfileMutation, updateStateProfile } from '../../../store'

function Profile({ profile }) {
  const dispatch = useDispatch()
  const [user, setUser] = useState(profile)
  const [updateProfile] = useUpdateProfileMutation()

  useEffect(() => {
    setUser(profile)
  }, [profile])

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedProfile = await updateProfile(user)
    dispatch(updateStateProfile(updatedProfile.data))
  }

  return (
    user && (
      <Card header='Profile' title='Check all your data master ;D'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  value={user.name}
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  value={user.lastName}
                  name='lastName'
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label htmlFor='github'>Github</label>
                <input
                  value={user.github}
                  name='github'
                  type='text'
                  className='form-control'
                  placeholder='Github'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label htmlFor='linkedin'>Linkedin</label>
                <input
                  value={user.linkedin}
                  name='linkedin'
                  type='text'
                  className='form-control'
                  placeholder='Linkedin'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label htmlFor='phone'>Phone number</label>
                <input
                  value={user.phone}
                  name='phone'
                  type='text'
                  className='form-control'
                  placeholder='Phone'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label htmlFor='bio'>Bio</label>
                <textarea
                  className='form-control'
                  name='bio'
                  value={user.bio}
                  onChange={handleChange}
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
                  value={user.profession}
                  onChange={handleChange}
                  cols='20'
                  rows='3'
                ></textarea>
              </div>
            </div>
          </div>
          <button className='btn btn-primary mt-2'>Update</button>
        </form>
      </ Card>
    )
  )
}

export default Profile
