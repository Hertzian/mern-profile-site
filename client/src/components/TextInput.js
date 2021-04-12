const TextInput = (props) => {
  const { lbl, type, input, value } = props
  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <input type={type} name={input} value={value} className='form-control' />
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
  value: ''
}

export default TextInput
