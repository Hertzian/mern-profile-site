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
import InterviewSection from '../pages/back/InterviewSection'
import PracticeSection from '../pages/back/PracticeSection'
import PrivateRoute from '../components/PrivateRoute'
import { UserContext } from '../context/UserContext'
import DogRoutes from '../study/note19/DogRoutes'
import whiskey from '../study/note19/images/dog1.jpg'
import hazel from '../study/note19/images/dog3.jpg'
import tubby from '../study/note19/images/dog6.jpg'

class SiteRoutes extends Component {
  static contextType = UserContext
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn',
          'Whiskey is a terrible guard dog',
          'Whiskey wants cuddle with you'
        ]
      },
      {
        name: 'Hazel',
        age: 5,
        src: hazel,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is highly inteligent',
          'Hazel loves people more than dogs'
        ]
      },
      {
        name: 'Tubby',
        age: 5,
        src: tubby,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise',
          'Tubby loves eating food'
        ]
      }
    ]
  }
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
            <PrivateRoute exact path='/admin/practice' comp={PracticeSection} />
            <PrivateRoute exact path='/admin/study' comp={StudySection} />
            <PrivateRoute
              exact
              path='/admin/interviews'
              comp={InterviewSection}
            />
            <DogRoutes dogs={this.props.dogs} />
          </>
        ) : (
          <Redirect to='/mamalon/login' />
        )}
      </Switch>
    )
  }
}

export default SiteRoutes
