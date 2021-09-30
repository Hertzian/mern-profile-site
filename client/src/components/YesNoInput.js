import { useState } from 'react'
import RadioInput from './RadioInput'

const YesNoInput = (props) => {
  const [ans, setAns] = useState(false)

  return (
    <div className='form-group'>
      <label htmlFor='show'>Do you want to show?</label>
      <RadioInput label='Yes' checked={ans} value='yes' setter={setAns} />
      <RadioInput label='No' checked={ans} value='no' setter={setAns} />
    </div>
  )
}

export default YesNoInput
