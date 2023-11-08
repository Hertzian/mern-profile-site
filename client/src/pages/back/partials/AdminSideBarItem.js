import { NavLink } from 'react-router-dom'

const AdminSideBarItem = ({ label, children, route }) => {

  return (
    <NavLink className='nav-link' to={route}>
      <div className='sb-nav-link-icon'>
        {children}
      </div>
      {label}
    </NavLink>
  )
}

export default AdminSideBarItem
