const AreaInput = (props) => {
  const { lbl, input, value } = props

  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <textarea name={input} className='form-control'>
        {value}
      </textarea>
    </div>
  )
}

AreaInput.defaultProps = {
  value: ''
}

export default AreaInput
