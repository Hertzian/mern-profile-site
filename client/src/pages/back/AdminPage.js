import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminMenu from './partials/AdminMenu'
import AdminNav from './partials/AdminNav'
import '../../styles/tables.css'
import '../../styles/back.css'
import { Navigate, Outlet } from 'react-router-dom'
import { logout } from '../../store'

const AdminPage = (props) => {
  const dispatch = useDispatch()
  const userToken = useSelector(({ authSlice }) => authSlice.token)
  const userLogged = useSelector(({ usersSlice }) => usersSlice.user)
  const [openMenu, setOpenMenu] = useState(true)

  if (!userToken) {
    return <Navigate to='/mamalon/login' />
  }

  let userName = ''
  if (userLogged) {
    userName = `${userLogged.name} ${userLogged.lastName}`
  }

  const handleMenu = () => setOpenMenu(!openMenu)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={`sb-nav-fixed ${!openMenu && 'sb-sidenav-toggled'}`}>
      <AdminNav
        menuState={handleMenu}
        userName={userName}
        logoutFn={handleLogout}
      />
      <AdminMenu name={userName}>

        <Outlet />

      </AdminMenu>
    </div>
  )
}

export default AdminPage
