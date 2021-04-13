import { useState } from 'react'
import MenuItem from './MenuItem'
import { menuItems as items } from '../dummy/dummy'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenuHandler = () => {
    setMenuIsOpen(true)
  }
  const closeMenuHandler = () => {
    setMenuIsOpen(false)
  }

  return (
    <div className={menuIsOpen ? 'navf-open' : undefined}>
      <div className='logo'></div>
      <button
        className='navf-toggle'
        aria-label='toggle navigation'
        onClick={menuIsOpen ? closeMenuHandler : openMenuHandler}
      >
        <span className='hamburger'></span>
      </button>
      <nav className='navf'>
        <ul className='navf__list'>
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
