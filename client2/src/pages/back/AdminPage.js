import { useState, useContext } from 'react'
import AdminMenu from './partials/AdminMenu'
import AdminNav from './partials/AdminNav'

import { dummyData } from '../../dummyEndpoints'
import '../../styles/tables.css'
import '../../styles/back.css'
import Alert from '../../components/Alert'

const AdminPage = (props) => {
  const [openMenu, setOpenMenu] = useState(true)
  const handleMenu = () => setOpenMenu(!openMenu)
  const { user } = dummyData

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav
        {...props}
        menuState={handleMenu}
        name={user && `${user.name} ${user.lastname}`}
      />
      <AdminMenu name={user && `${user.name} ${user.lastname}`}>
        <Alert message='This is an alert example' color='danger mt-2' />
        {props.children}
      </AdminMenu>
    </div>
  )
}

export default AdminPage
