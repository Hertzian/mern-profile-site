import { useRouteMatch, Switch, Route } from 'react-router-dom'
import AdminMenu from '../components/AdminMenu'
import ProfileSection from '../components/back/ProfileSection'
import PlacesSection from '../components/back/PlacesSection'
import SkillsSection from '../components/back/SkillsSection'
import ProjectsSection from '../components/back/ProjectsSection'

const AdminPage = () => {
  const { path } = useRouteMatch()

  return (
    <div className='admin'>
      <ul className='admin-navbar'>
        <AdminMenu />
      </ul>

      <Switch>
        <Route path={`${path}/profile`}>
          <ProfileSection />
        </Route>
        <Route path={`${path}/places`}>
          <PlacesSection />
        </Route>
        <Route path={`${path}/skills`}>
          <SkillsSection />
        </Route>
        <Route path={`${path}/projects`}>
          <ProjectsSection />
        </Route>
      </Switch>
    </div>
  )
}

export default AdminPage
