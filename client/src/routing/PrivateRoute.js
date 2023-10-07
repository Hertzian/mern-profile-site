import { Route, Navigate } from 'react-router-dom'

const isAuthenticated = true // this comes from global state

function PrivateRoute(props) {
  const routesProps = (routeProps) =>
    isAuthenticated
      ? (<props.comp {...routeProps} />)
      : (<Navigate to='/mamalon/login' />)


  return (
    <Route {...props} render={routesProps} />
  )
}

export default PrivateRoute
