const MenuItem = ({ refe, label, onClose }) => {
  return (
    <li className='navf__item'>
      <a href={refe} className='navf__link' onClick={onClose}>
        {label}
      </a>
    </li>
  )
}

export default MenuItem
