import { Component, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export class UserProvider extends Component {
  constructor (props) {
    super(props)
    this.state = { isAuthenticated: false, isLoading: true, user: '' }
    this.authorize = this.authorize.bind(this)
    this.logout = this.logout.bind(this)
    this.loadUser = this.loadUser.bind(this)
  }

  async loadUser () {
    const res = await axios.get('/api/users/profile')
    const resUser = res.data.user
    this.setState({ user: resUser })
  }

  setLoading () {
    this.setState({ isLoading: !this.state.isLoading })
  }

  authorize () {
    this.setState({ isAuthenticated: true })
  }

  logout () {
    localStorage.removeItem('token')
    this.setState({ isAuthenticated: false })
  }

  render () {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          authorize: this.authorize,
          logout: this.logout,
          setLoading: this.setLoading,
          loadUser: this.loadUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
