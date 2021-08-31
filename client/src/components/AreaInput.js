import { useState } from 'react'
import ValidationMessages from '../components/ValidationMessages'

const AreaInput = (props) => {
  const { lbl, input } = props
  const [enter, setEnter] = useState('')
  const [valid, setValid] = useState('')

  const handleChange = (e) => {
    setEnter(e.target.value)

    if (e.target.value === '') {
      return setValid(false)
    }
    return setValid(true)
  }

  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <textarea
        value={enter || ''}
        name={input}
        onChange={handleChange}
        className={`form-control ${valid ? 'is-valid' : 'is-invalid'}`}
      />
      <ValidationMessages valid={valid} />
    </div>
  )
}

AreaInput.defaultProps = {
  value: ''
}

export default AreaInput
