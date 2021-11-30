import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AdminSideBarItem extends Component {
  render() {
    const { label, icon, route } = this.props
    return (
      <NavLink className='nav-link' to={route}>
        <div className='sb-nav-link-icon'>
          <i className={icon}></i>
        </div>
        {label}
      </NavLink>
    )
  }
}

export default AdminSideBarItem
