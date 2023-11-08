import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaUserAlt } from "react-icons/fa"

const AdminNav = ({ userName, menuState, logoutFn }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  let renderUserName = ''
  if (userName) {
    renderUserName = <span className='navbar-nav text-light'> Welcome {userName} </span>
  }

  return (
    <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>Admin Panel</Link>
      <button
        className='btn btn-link btn-sm order-1 order-lg-0'
        id='sidebarToggle'
        onClick={menuState}
      >
        <FaBars />
      </button>
      <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0' />

      {renderUserName}

      <ul className='navbar-nav ml-auto ml-md-0'>
        <li className='nav-item dropdown'>
          <span
            className='nav-link dropdown-toggle'
            id='userDropdown'
            onClick={toggleOpen}
          >
            <FaUserAlt />
          </span>
          <div className={`dropdown-menu dropdown-menu-right ${isOpen && 'show'}`} >
            <button onClick={logoutFn} className='dropdown-item'> Logout </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
