const Card = ({ header, title, children }) => {
  return (
    <div className='card mt-2'>
      <div className='card-header'>{header}</div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: '',
  extra: ''
}

export default Card
