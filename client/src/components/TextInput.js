import { useState } from 'react'

const TextInput = (props) => {
  const { lbl, type, value, input } = props
  const [enter, setEnter] = useState('')

  const handleChange = (e) => {
    setEnter({
      ...enter,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <input
        type={type}
        name={input}
        value={value}
        onChange={handleChange}
        className='form-control'
      />
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text'
}

export default TextInput
