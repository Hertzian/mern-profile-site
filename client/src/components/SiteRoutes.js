import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/templates/HomePage'
import ProjectPage from '../pages/templates/ProjectPage'
import Login from '../pages/templates/Login'
import ProfileSection from '../pages/back/ProfileSection'
import PlacesSection from '../pages/back/PlacesSection'
import SkillsSection from '../pages/back/SkillsSection'
import ProjectsSection from '../pages/back/ProjectsSection'
import StudySection from '../pages/back/StudySection'
import PrivateRoute from '../components/PrivateRoute'
import { UserContext } from '../context/UserContext'

class SiteRoutes extends Component {
  static contextType = UserContext

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/project/:projectId' component={ProjectPage} />
        <Route exact path='/mamalon/login' component={Login} />

        {this.context.isAuthenticated ? (
          <>
            <PrivateRoute exact path='/admin/profile' comp={ProfileSection} />
            <PrivateRoute exact path='/admin/places' comp={PlacesSection} />
            <PrivateRoute exact path='/admin/skills' comp={SkillsSection} />
            <PrivateRoute exact path='/admin/projects' comp={ProjectsSection} />
            <PrivateRoute exact path='/admin/study' comp={StudySection} />
          </>
        ) : (
          <Redirect to='/mamalon/login' />
        )}
      </Switch>
    )
  }
}

export default SiteRoutes
