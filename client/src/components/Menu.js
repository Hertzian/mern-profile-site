import { useState } from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenuHandler = () => {
    console.log('ham')
    setMenuIsOpen(true)
  }
  const closeMenuHandler = (isOpen) => {
    console.log('se cerro')
    console.log(isOpen)
    setMenuIsOpen(false)
  }

  const items = [
    { label: 'Home', refe: '#home' },
    { label: 'My experience', refe: '#places' },
    { label: 'About', refe: '#about' },
    { label: 'Skills', refe: '#skills' },
    { label: 'Projects', refe: '#projects' },
    { label: 'Contact', refe: '#contact' }
  ]

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
