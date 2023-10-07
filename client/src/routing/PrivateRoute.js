import { Route, Redirect } from 'react-router-dom'

const isAuthenticated = true // this comes from global state

function PrivateRoute(props) {
  const routesProps = (routeProps) =>
    isAuthenticated
      ? (<this.props.comp {...routeProps} />)
      : (<Redirect to='/mamalon/login' />)


  return (
    <Route {...props} render={routesProps} />
  )
}

export default PrivateRoute
