import Profile from './components/Profile'
import Access from './components/Access'
import MainImages from './components/MainImages'
import AdminPage from '../AdminPage'
import Alert from '../../../components/Alert'

<<<<<<< Updated upstream:client2/src/pages/back/profile/ProfileSection.js
class ProfileSection extends Component {
  static contextType = UserContext
  render () {
    const { isAuthenticated } = this.context
    return (
      <>
        {isAuthenticated
          ? (
            <AdminPage {...this.props}>
              <Alert message='This is an alert example' color='danger mt-2' />
              <Profile />
              <Access />
              <MainImages />
            </AdminPage>
            )
          : (
            <Redirect to='/mamalon/admin' />
            )}
      </>
    )
  }
=======
const ProfileSection = (props) => {
  return (
    <>
      <AdminPage {...props}>
        <Profile />
        <Access />
        <MainImages />
      </AdminPage>
    </>
  )
>>>>>>> Stashed changes:client/src/pages/back/profile/ProfileSection.js
}

export default ProfileSection
