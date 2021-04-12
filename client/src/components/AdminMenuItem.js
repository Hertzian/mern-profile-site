import { Link } from 'react-router-dom'

const AdminMenuItem = ({ name, urlParam }) => {
  return (
    <li className='admin-navbar__item'>
      <Link to={`/${urlParam}/${name.toLowerCase()}`}>{name}</Link>
    </li>
  )
}

export default AdminMenuItem
