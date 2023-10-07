import { useState } from 'react'

import { frontMenu } from '../../../config/menuConfig'
import MenuItem from './MenuItem'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuHandler = () => setMenuIsOpen(!menuIsOpen)

  const menuList = frontMenu.map((item, idx) => (
    <MenuItem
      key={idx}
      label={item.label}
      refe={item.refe}
      onClose={menuHandler}
    />
  ))

  return (
    <div className={menuIsOpen ? 'navf-open' : undefined}>
      <div className='logo' />
      <button
        className='navf-toggle'
        aria-label='toggle navigation'
        onClick={menuHandler}
      >
        <span className='hamburger' />
      </button>
      <nav className='navf'>
        <ul className='navf__list'>{menuList}</ul>
      </nav>
    </div>
  )
}

export default Menu
