import { useState } from 'react'
import MenuItem from './MenuItem'
import { menuItems as items } from '../dummy/dummy'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenuHandler = () => {
    setMenuIsOpen(true)
  }
  const closeMenuHandler = (isOpen) => {
    setMenuIsOpen(false)
  }

  return (
    <div className={menuIsOpen ? 'nav-open' : undefined}>
      <div className='logo'></div>
      <button
        className='nav-toggle'
        aria-label='toggle navigation'
        onClick={menuIsOpen ? closeMenuHandler : openMenuHandler}
      >
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          {items.map((item, idx) => {
            return (
              <MenuItem
                key={idx}
                label={item.label}
                refe={item.refe}
                onClose={closeMenuHandler}
              />
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
