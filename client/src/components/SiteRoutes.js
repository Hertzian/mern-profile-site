import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/templates/HomePage'
import ProjectPage from '../pages/templates/ProjectPage'
import Login from '../pages/templates/Login'
import ProfileSection from '../pages/back/ProfileSection'
import PlacesSection from '../pages/back/PlacesSection'
import SkillsSection from '../pages/back/SkillsSection'
import ProjectsSection from '../pages/back/ProjectsSection'

class SiteRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/project/:projectId' component={ProjectPage} />
        <Route exact path='/mamalon/login' component={Login} />
        <Route exact path='/admin/profile' component={ProfileSection} />
        <Route exact path='/admin/places' component={PlacesSection} />
        <Route exact path='/admin/skills' component={SkillsSection} />
        <Route exact path='/admin/projects' component={ProjectsSection} />
      </Switch>
    )
  }
}

export default SiteRoutes
