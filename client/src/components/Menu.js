import { useState } from 'react'
import MenuItem from './MenuItem'
import { menuItems } from '../dummy/dummy'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuHandler = () => setMenuIsOpen(!menuIsOpen)

  const menuList = menuItems.map((item, idx) => (
    <MenuItem
      key={idx}
      label={item.label}
      refe={item.refe}
      onClose={menuHandler}
    />
  ))

  return (
    <div className={menuIsOpen ? 'navf-open' : undefined}>
      <div className='logo'></div>
      <button
        className='navf-toggle'
        aria-label='toggle navigation'
        onClick={menuHandler}
      >
        <span className='hamburger'></span>
      </button>
      <nav className='navf'>
        <ul className='navf__list'>{menuList}</ul>
      </nav>
    </div>
  )
}

export default Menu
