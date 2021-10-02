import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/templates/HomePage'
import ProjectPage from './pages/templates/ProjectPage'
import Login from './pages/templates/Login'
import AdminPage from './pages/templates/AdminPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/project/:projectId' component={ProjectPage} />
        <Route exact path='/mamalon' component={Login} />
        <Route path='/admin' component={AdminPage} />
      </Switch>
    </Router>
  )
}

export default App
