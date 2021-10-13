import Profile from '../../components/forms/Profile'
import Access from '../../components/forms/Access'
import MainImages from '../../components/forms/MainImages'
import AdminPage from '../templates/AdminPage'

const ProfileSection = () => {
  return (
    <AdminPage>
      <Profile />
      <Access />
      <MainImages />
    </AdminPage>
  )
}

export default ProfileSection
