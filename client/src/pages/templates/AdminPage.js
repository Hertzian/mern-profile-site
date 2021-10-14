import { useState } from 'react'
import AdminMenu from '../../components/AdminMenu'
import AdminNav from '../../components/AdminNav'
import '../../styles/tables.css'
import '../../styles/back.css'

const AdminPage = (props) => {
  const [openMenu, setOpenMenu] = useState(true)

  const handleMenu = () => setOpenMenu(!openMenu)

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav {...props} menuState={handleMenu} />
      <AdminMenu>{props.children}</AdminMenu>
    </div>
  )
}

export default AdminPage
