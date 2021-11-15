import { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Profile from '../../components/forms/Profile'
import Access from '../../components/forms/Access'
import MainImages from '../../components/forms/MainImages'
import AdminPage from '../templates/AdminPage'
import Alert from '../../components/Alert'
import { UserContext } from '../../context/UserContext'

class ProfileSection extends Component {
  static contextType = UserContext
  render() {
    const { isAuthenticated } = this.context
    return (
      <>
        {isAuthenticated ? (
          <AdminPage {...this.props}>
            <Alert message='This is an alert example' color='danger mt-2' />
            <Profile />
            <Access />
            <MainImages />
          </AdminPage>
        ) : (
          <Redirect to='/mamalon/admin' />
        )}
      </>
    )
  }
}

export default ProfileSection
