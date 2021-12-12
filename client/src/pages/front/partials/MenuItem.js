import { Link } from 'react-router-dom'

const MenuItem = ({ refe, label, onClose }) => {
  return (
    <li className='navf__item'>
      <Link to={refe} className='navf__link' onClick={onClose}>
        {label}
      </Link>
    </li>
  )
}

export default MenuItem
