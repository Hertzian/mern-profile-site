import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <div className='Navbar'>
        <NavLink
          exact
          activeClassName='Navbar-active'
          to='/admin/study/vending-machine/'
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName='Navbar-active'
          to='/admin/study/vending-machine/chips'
        >
          Chips
        </NavLink>
        <NavLink
          exact
          activeClassName='Navbar-active'
          to='/admin/study/vending-machine/soda'
        >
          Soda
        </NavLink>
        <NavLink
          exact
          activeClassName='Navbar-active'
          to='/admin/study/vending-machine/sardines'
        >
          Sardines
        </NavLink>
      </div>
    )
  }
}

export default Navbar
