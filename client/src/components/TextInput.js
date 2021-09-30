import { useState } from 'react'
import ValidationMessages from '../components/ValidationMessages'

const TextInput = (props) => {
  const { lbl, type, placeholder, input, value } = props
  const [enter, setEnter] = useState('')
  const [valid, setValid] = useState('')

  const handleChange = (e) => {
    setEnter({
      ...enter,
      [e.target.name]: e.target.value
    })

    if (e.target.value === '') {
      return setValid(false)
    }
    return setValid(true)
  }

  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <input
        type={type}
        name={input}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`form-control ${valid ? 'is-valid' : 'is-invalid'}`}
      />
      <ValidationMessages valid={valid} />
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text'
}

export default TextInput
