const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-header'>{props.header}</div>
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        {props.children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  title: ''
}

export default Card
