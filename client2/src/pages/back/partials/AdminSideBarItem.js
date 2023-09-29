import { NavLink } from 'react-router-dom'

<<<<<<< Updated upstream:client2/src/pages/back/partials/AdminSideBarItem.js
class AdminSideBarItem extends Component {
  render () {
    const { label, icon, route } = this.props
    return (
      <NavLink className='nav-link' to={route}>
        <div className='sb-nav-link-icon'>
          <i className={icon} />
        </div>
        {label}
      </NavLink>
    )
  }
=======
const AdminSideBarItem = ({ label, icon, route }) => {

  return (
    <NavLink className='nav-link' to={route}>
      <div className='sb-nav-link-icon'>
        <i className={icon} />
      </div>
      {label}
    </NavLink>
  )
>>>>>>> Stashed changes:client/src/pages/back/partials/AdminSideBarItem.js
}

export default AdminSideBarItem
