import { useState } from 'react'
import AdminMenu from './partials/AdminMenu'
import AdminNav from './partials/AdminNav'
import setAuthToken from '../../utils/setAuthToken'
import '../../styles/tables.css'
import '../../styles/back.css'

const AdminPage = (props) => {
  const [openMenu, setOpenMenu] = useState(true)
  const handleMenu = () => setOpenMenu(!openMenu)
  const token = localStorage.token

  if (token) setAuthToken(token)

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav {...props} menuState={handleMenu} />
      <AdminMenu>{props.children}</AdminMenu>
    </div>
  )
}

export default AdminPage
