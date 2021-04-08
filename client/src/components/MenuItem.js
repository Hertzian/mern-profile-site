const MenuItem = ({ refe, label, onClose }) => {
  return (
    <li className='nav__item'>
      <a href={refe} className='nav__link' onClick={onClose}>
        {label}
      </a>
    </li>
  )
}

export default MenuItem
