import { useState } from 'react'
import AdminMenu from './partials/AdminMenu'
import AdminNav from './partials/AdminNav'
import '../../styles/tables.css'
import '../../styles/back.css'
import { Outlet } from 'react-router-dom'

const AdminPage = (props) => {
  const user = {}

  const [openMenu, setOpenMenu] = useState(true)
  const handleMenu = () => setOpenMenu(!openMenu)

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav
        {...props}
        menuState={handleMenu}
        userName={user && `${user.name} ${user.lastname}`}
      />
      <AdminMenu name={user && `${user.name} ${user.lastname}`}>

        <Outlet />

      </AdminMenu>
    </div>
  )
}

export default AdminPage
