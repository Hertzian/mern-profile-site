import { Component } from 'react'

export default class CalculatorCl extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div className='col'>
        <h2>Temperature Calculator Cl</h2>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    //this.state = { temperature: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const { temperature, scale } = this.props
    //const temperature = this.props.temperature
    //const scale = this.props.scale

    return (
      <div className='form-group'>
        <label>Enter temperature in {scaleNames[scale]}:</label>
        <input
          className='form-control'
          value={temperature}
          onChange={this.handleChange}
        />
      </div>
    )
  }
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
