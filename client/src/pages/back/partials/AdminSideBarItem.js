import { NavLink } from 'react-router-dom'

const AdminSideBarItem = ({ label, icon, route }) => {

  return (
    <NavLink className='nav-link' to={route}>
      <div className='sb-nav-link-icon'>
        <i className={icon} />
      </div>
      {label}
    </NavLink>
  )
}

export default AdminSideBarItem
