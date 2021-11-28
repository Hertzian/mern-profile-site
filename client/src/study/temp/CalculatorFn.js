import { useState } from 'react'

export default function CalculatorFn() {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('')

  const celsius =
    scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit =
    scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  const handleCelsiusChange = (temperature) => {
    setScale('c')
    setTemperature(temperature)
  }
  const handleFahrenheitChange = (temperature) => {
    setScale('f')
    setTemperature(temperature)
  }

  return (
    <div className='col'>
      <h2>Temperature Calculator Fn</h2>
      <TemperatureInput
        scale='c'
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}

function TemperatureInput(props) {
  const { temperature, scale, onTemperatureChange } = props

  const handleChange = (e) => onTemperatureChange(e.target.value)

  return (
    <div className='form-group'>
      <label>Enter temperature in {scaleNames[scale]}</label>
      <input
        className='form-control'
        type='text'
        value={temperature}
        onChange={handleChange}
      />
    </div>
  )
}

const BoilingVerdict = (props) => {
  if (props.celsius >= 100)
    return <p className='text-danger'>The water would boil.</p>
  return <p className='text-info'>The water would not boil.</p>
}

const scaleNames = { c: 'Celsius', f: 'Fahrenheit' }
const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9
const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) return ''
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}
