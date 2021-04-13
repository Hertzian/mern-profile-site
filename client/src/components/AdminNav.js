import { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminNav = ({ menuState }) => {
  const [userButton, setUserButton] = useState(false)

  const menuClick = () => menuState()
  const openUserButton = () => setUserButton(true)
  const closeUserButton = () => setUserButton(false)

  return (
    <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
      <a className='navbar-brand' href='index.html'>
        Admin Panel
      </a>
      <button
        className='btn btn-link btn-sm order-1 order-lg-0'
        id='sidebarToggle'
        onClick={menuClick}
      >
        <i className='fas fa-bars'></i>
      </button>
      <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0'></div>
      <ul className='navbar-nav ml-auto ml-md-0'>
        <li className='nav-item dropdown'>
          <span
            className='nav-link dropdown-toggle'
            id='userDropdown'
            onClick={userButton ? closeUserButton : openUserButton}
          >
            <i className='fas fa-user fa-fw'></i>
          </span>
          <div
            className={`dropdown-menu dropdown-menu-right ${
              userButton && 'show'
            }`}
          >
            <Link
              className='dropdown-item'
              to={'/'}
              onClick={userButton ? closeUserButton : openUserButton}
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
