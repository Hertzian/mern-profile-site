import { Component, createContext } from 'react'

export const UserContext = createContext()

export class UserProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { isAuthenticated: false, loading: true }
    this.authorize = this.authorize.bind(this)
    this.logout = this.logout.bind(this)
  }

  setLoading() {
    this.setState({ loading: false })
  }

  authorize() {
    this.setState({ isAuthenticated: true })
  }

  logout() {
    this.setState({ isAuthenticated: false })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          authorize: this.authorize,
          logout: this.logout,
          setLoading: this.setLoading
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
