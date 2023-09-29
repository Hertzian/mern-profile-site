import { useState } from 'react'
import { Link } from 'react-router-dom'

<<<<<<< Updated upstream:client2/src/pages/back/partials/AdminNav.js
class AdminNav extends Component {
  static contextType = UserContext
  constructor (props) {
    super(props)
    this.state = { isOpen: false }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  async componentDidMount () {
    const { user } = this.context
    if (this.state.name === '' && this.context.user) {
      this.setState({ name: `${user.name} ${user.lastname}` })
    }
  }

  toggleOpen () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleLogout () {
    this.context.logout()
    logout()
    this.props.history.replace('/mamalon/login')
  }

  render () {
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
          <i className='fas fa-bars' />
        </button>
        <div className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0' />
        {this.props.name && (
          <span className='navbar-nav text-light'>
            Welcome {this.props.name}
          </span>
        )}
        <ul className='navbar-nav ml-auto ml-md-0'>
          <li className='nav-item dropdown'>
            <span
              className='nav-link dropdown-toggle'
              id='userDropdown'
              onClick={this.toggleOpen}
            >
              <i className='fas fa-user fa-fw' />
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
=======
const AdminNav = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    console.log('logout :)')
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
>>>>>>> Stashed changes:client/src/pages/back/partials/AdminNav.js
}

export default AdminNav
