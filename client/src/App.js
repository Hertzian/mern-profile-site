import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import AdminPage from './pages/AdminPage'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route
            path='/project-detail/:projectId'
            component={DetailPage}
            exact
          />
          <Route path='/admin' component={AdminPage} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
