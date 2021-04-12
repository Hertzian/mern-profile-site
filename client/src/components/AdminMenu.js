import { useRouteMatch, Link } from 'react-router-dom'

const AdminMenu = () => {
  const { url } = useRouteMatch()

  return (
    <>
      <ul className='admin-navbar'>
        <li className='admin-navbar__item'>
          <Link to={`${url}/profile`}>Profile</Link>
        </li>
        <li className='admin-navbar__item'>
          <Link to={`${url}/places`}>Places</Link>
        </li>
        <li className='admin-navbar__item'>
          <Link to={`${url}/skills`}>Skills</Link>
        </li>
        <li className='admin-navbar__item'>
          <Link to={`${url}/projects`}>Projects</Link>
        </li>
        <li className='admin-navbar__item'>
          <p>Logout</p>
        </li>
      </ul>
    </>
  )
}

export default AdminMenu
