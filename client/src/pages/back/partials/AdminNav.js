import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../store'

const AdminNav = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    console.log('logout carnal')
    dispatch(logout())
  }

  return (
    <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>Admin Panel</Link>
      <button
        className='btn btn-link btn-sm order-1 order-lg-0'
        id='sidebarToggle'
        onClick={props.menuState}
      >
        <i className='fas fa-bars' />
      </button>
      <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0' />
      {props.name && (<span className='navbar-nav text-light'> Welcome {props.name} </span>)}
      <ul className='navbar-nav ml-auto ml-md-0'>
        <li className='nav-item dropdown'>
          <span
            className='nav-link dropdown-toggle'
            id='userDropdown'
            onClick={toggleOpen}
          >
            <i className='fas fa-user fa-fw' />
          </span>
          <div className={`dropdown-menu dropdown-menu-right ${isOpen && 'show'}`} >
            <button onClick={handleLogout} className='dropdown-item'> Logout </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNav
