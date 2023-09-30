import Profile from '../../components/Profile'
import Access from '../../components/Access'
import MainImages from '../../components/MainImages' // pending component
import AdminPage from './AdminPage'

function ProfileSection(props) {
  return (
    <>
      <AdminPage {...props}>
        <Profile />
        <Access />
        <MainImages />
      </AdminPage>
    </>
  )
}

export default ProfileSection
