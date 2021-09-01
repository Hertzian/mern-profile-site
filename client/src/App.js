import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/templates/HomePage'
import ProjectPage from './pages/templates/ProjectPage'
import Login from './pages/templates/Login'
import AdminPage from './pages/templates/AdminPage'
import PlaceState from './context/PlaceState'

function App() {
  return (
    <PlaceState>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/project/:projectId' component={ProjectPage} exact />
          <Route path='/admin' component={AdminPage} />
          <Route path='/mamalon' component={Login} />
        </Switch>
      </Router>
    </PlaceState>
  )
}

export default App
