import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/front/HomePage'
import ProjectPage from '../pages/front/ProjectPage'
import Login from '../pages/back/Login'
import ProfileSection from '../pages/back/profile/ProfileSection'
import PlacesSection from '../pages/back/places/PlacesSection'
import SkillsSection from '../pages/back/skills/SkillsSection'
import ProjectsSection from '../pages/back/projects/ProjectsSection'
import PracticeSection from '../pages/back/practice/PracticeSection'
import PrivateRoute from './PrivateRoute'

const isAuthenticated = true // this comes from global state

function SiteRoutes() {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/project/:projectId' component={ProjectPage} />
      <Route exact path='/mamalon/login' component={Login} />

      {
        isAuthenticated
          ? (
            <>
              <PrivateRoute exact path='/admin/profile' comp={ProfileSection} />
              <PrivateRoute exact path='/admin/places' comp={PlacesSection} />
              <PrivateRoute exact path='/admin/skills' comp={SkillsSection} />
              <PrivateRoute exact path='/admin/projects' comp={ProjectsSection} />
              <PrivateRoute exact path='/admin/practice' comp={PracticeSection} />
            </>
          )
          : <Navigate to='/mamalon/login' />
      }
    </Router>
  )
}

export default SiteRoutes
