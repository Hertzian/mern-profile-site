import Profile from '../../components/forms/Profile'
import Access from '../../components/forms/Access'
import MainImages from '../../components/forms/MainImages'
import UserState from '../../context/UserState'

const ProfileSection = () => {
  return (
    <>
      <UserState>
        <Profile />
        <Access />
        <MainImages />
      </UserState>
    </>
  )
}

export default ProfileSection
