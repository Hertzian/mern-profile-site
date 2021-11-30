const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p className='footer-link'>Lalo Aguilar Copyright &copy; {date}</p>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a href='{{ $github }}' className='social-list__link'>
            <i className='fab fa-github'></i>github
          </a>
        </li>
        <li className='social-list__item'>
          <a href='{{ $linkedin }}' className='social-list__link'>
            <i className='fab fa-linkedin-in'></i>linkedin
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
