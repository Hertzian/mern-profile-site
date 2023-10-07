const ValidationMessages = ({ valid, message }) => {
  return (
    <>
      {valid
        ? (<div className='valid-feedback'>{message || 'Looks good!'}</div>)
        : (<div className='invalid-feedback'>{message || 'Invalid value!'}</div>)}
    </>
  )
}

export default ValidationMessages
