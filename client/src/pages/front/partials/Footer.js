import { siteName } from "../../../config/menuConfig"
import { thisYear } from "../../../utils/thisYear"

const Footer = ({ name, lastname, github, linkedin }) => {
  const date = thisYear()

  return (
    <footer className='footer'>
      <p className='footer-link'>
        {siteName} Copyright &copy; {date}
      </p>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a href={github} className='social-list__link'>
            <i className='fab fa-github' />
          </a>
        </li>
        <li className='social-list__item'>
          <a href={linkedin} className='social-list__link'>
            <i className='fab fa-linkedin-in' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
