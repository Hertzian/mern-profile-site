import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

class PrivateRoute extends Component {
  static contextType = UserContext

  render() {
    return (
      <Route
        {...this.props}
        render={(routeProps) =>
          this.context.isAuthenticated ? (
            <this.props.comp {...routeProps} />
          ) : (
            <Redirect to='/mamalon/login' />
          )
        }
      />
    )
  }
}

export default PrivateRoute
