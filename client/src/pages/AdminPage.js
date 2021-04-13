import { useState } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import AdminMenu from '../components/AdminMenu'
import AdminNav from '../components/AdminNav'
import ProfileSection from '../components/back/ProfileSection'
import PlacesSection from '../components/back/PlacesSection'
import SkillsSection from '../components/back/SkillsSection'
import ProjectsSection from '../components/back/ProjectsSection'
import '../styles/tables.css'
import '../styles/back.css'

const AdminPage = () => {
  const { path } = useRouteMatch()
  const [openMenu, setOpenMenu] = useState(true)

  const onOpenMenu = () => setOpenMenu(false)
  const onCloseMenu = () => setOpenMenu(true)

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav menuState={openMenu ? onOpenMenu : onCloseMenu} />
      <AdminMenu>
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
      </AdminMenu>
    </div>
  )
}

export default AdminPage
