import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Profile from './components/Profile'
import Access from './components/Access'
import ProfileImages from './components/ProfileImages' // pending component
import { useGetProfileQuery, setStateProfile } from '../../store'

function ProfileSection(props) {
  const dispatch = useDispatch()
  const { data,
    //  isFetching 
  } = useGetProfileQuery()

  useEffect(() => {
    dispatch(setStateProfile(data))
  })

  let profile = null
  let images = null
  let access = null

  if (data) {
    const { name, lastName, github, linkedin, phone, bio, profession, ...obj1 } = data
    const { portrait, background, email } = obj1
    images = { portrait, background }
    access = { email, password: '' }
    profile = { name, lastName, github, linkedin, phone, bio, profession }
  }

  return (
    <>
      <Profile profile={profile} />
      <Access access={access} />
      <ProfileImages images={images} />
    </>
  )
}

export default ProfileSection
