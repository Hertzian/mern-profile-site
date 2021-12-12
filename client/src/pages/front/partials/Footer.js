const Footer = ({ name, lastname, github, linkedin }) => {
  const date = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p className='footer-link'>
        {name} {lastname} Copyright &copy; {date}
      </p>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a href={github} className='social-list__link'>
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a href={linkedin} className='social-list__link'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
