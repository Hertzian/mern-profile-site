import { useState } from 'react'
import { useSelector } from 'react-redux'

import { frontMenu } from '../../../config/menuConfig'
import MenuItem from './MenuItem'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const userToken = useSelector(({ authSlice }) => authSlice.token)

  const menuHandler = () => setMenuIsOpen(!menuIsOpen)

  const menuList = []
  for (const item of frontMenu) {
    if (!userToken && (item.label === 'Admin')) {
      continue
    }
    menuList.push(item)
  }

  const renderMenu = menuList.map((item, idx) => {
    return (<MenuItem
      key={idx}
      label={item.label}
      refe={item.refe}
      onClose={menuHandler}
    />)
  })

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
        <ul className='navf__list'>{renderMenu}</ul>
      </nav>
    </div>
  )
}

export default Menu
