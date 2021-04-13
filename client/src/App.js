import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/project/:projectId' component={ProjectPage} exact />
          <Route path='/admin' component={AdminPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
