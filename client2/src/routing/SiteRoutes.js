import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/front/HomePage'
import ProjectPage from '../pages/front/ProjectPage'
import Login from '../pages/back/Login'
import ProfileSection from '../pages/back/profile/ProfileSection'
import PlacesSection from '../pages/back/places/PlacesSection'
import SkillsSection from '../pages/back/skills/SkillsSection'
import ProjectsSection from '../pages/back/projects/ProjectsSection'
import StudySection from '../pages/back/study/StudySection'
import InterviewSection from '../pages/back/interview/InterviewSection'
import PracticeSection from '../pages/back/practice/PracticeSection'
import PrivateRoute from './PrivateRoute'
import { UserContext } from '../context/UserContext'
import DogRoutes from '../pages/back/study/components/note19/DogRoutes'
import whiskey from '../pages/back/study/components/note19/images/dog1.jpg'
import hazel from '../pages/back/study/components/note19/images/dog3.jpg'
import tubby from '../pages/back/study/components/note19/images/dog6.jpg'

class SiteRoutes extends Component {
  static contextType = UserContext

  render() {
    const { isAuthenticated } = this.context

    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/project/:projectId' component={ProjectPage} />
        <Route exact path='/mamalon/login' component={Login} />

        {isAuthenticated
          ? (
            <>
              <PrivateRoute exact path='/admin/profile' comp={ProfileSection} />
              <PrivateRoute exact path='/admin/places' comp={PlacesSection} />
              <PrivateRoute exact path='/admin/skills' comp={SkillsSection} />
              <PrivateRoute exact path='/admin/projects' comp={ProjectsSection} />
              <PrivateRoute exact path='/admin/practice' comp={PracticeSection} />
              <PrivateRoute exact path='/admin/study' comp={StudySection} />
              <PrivateRoute
                exact
                path='/admin/interviews'
                comp={InterviewSection}
              />
              <DogRoutes dogs={this.props.dogs} />
            </>
          )
          : (
            <Redirect to='/mamalon/login' />
          )}
      </Switch>
    )
  }
}

export default SiteRoutes
