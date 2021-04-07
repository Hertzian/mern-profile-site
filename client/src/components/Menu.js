const Menu = () => {
  // Navigation
  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelectorAll('.nav__link')

  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open')
    })
  })

  return (
    <>
      <div className='logo'></div>
      <button className='nav-toggle' aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='#home' className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a href='#places' className='nav__link'>
              My experience
            </a>
          </li>
          <li className='nav__item'>
            <a href='#about' className='nav__link'>
              About me
            </a>
          </li>
          <li className='nav__item'>
            <a href='#skills' className='nav__link'>
              Skills
            </a>
          </li>
          <li className='nav__item'>
            <a href='#projects' className='nav__link'>
              My work
            </a>
          </li>
          <li className='nav__item'>
            <a href='#contact' className='nav__link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
