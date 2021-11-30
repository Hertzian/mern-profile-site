import { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../context/userActions'
import { UserContext } from '../../../context/UserContext'

class AdminNav extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleLogout() {
    this.context.logout()
    logout()
    this.props.history.replace('/mamalon/login')
  }

  render() {
    return (
      <nav className='sb-topnav navbar navbar-expand navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
          Admin Panel
        </Link>
        <button
          className='btn btn-link btn-sm order-1 order-lg-0'
          id='sidebarToggle'
          onClick={this.props.menuState}
        >
          <i className='fas fa-bars'></i>
        </button>
        <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0'></div>
        <ul className='navbar-nav ml-auto ml-md-0'>
          <li className='nav-item dropdown'>
            <span
              className='nav-link dropdown-toggle'
              id='userDropdown'
              onClick={this.toggleOpen}
            >
              <i className='fas fa-user fa-fw'></i>
            </span>
            <div
              className={`dropdown-menu dropdown-menu-right ${
                this.state.isOpen && 'show'
              }`}
            >
              <button onClick={this.handleLogout} className='dropdown-item'>
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

export default AdminNav
