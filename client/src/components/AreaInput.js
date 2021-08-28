import { useState } from 'react'

const AreaInput = (props) => {
  const { lbl, input, value } = props
  const [enter, setEnter] = useState('')

  const handleChange = (e) => {
    setEnter(e.target.value)
  }

  return (
    <div className='form-group'>
      <label htmlFor={input}>{lbl}</label>
      <textarea
        value={value || ''}
        name={input}
        onChange={handleChange}
        className='form-control'
      >
        {value}
      </textarea>
    </div>
  )
}

AreaInput.defaultProps = {
  value: ''
}

export default AreaInput
