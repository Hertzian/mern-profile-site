import { Component } from 'react'

class MultipleForms extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(`You typed: ${this.state.username}`)
    this.setState({ username: '' })
  }
  //ES5 example Computed property names
  //let CatData = {}
  //let microchip = 123456789
  //CatData[microchip] = 'Blue Steele'
  //
  //ES2015 example Computed property names
  //let microchip = 123456789
  //let CatData = {
  //property computed inside the object literal
  //[microchip]: 'Blue Steele'
  //}

  render() {
    return (
      <div>
        <h1>Multiple Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control mt-1'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='username'
            />
            <input
              className='form-control mt-1'
              type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className='form-control mt-1'
              type='password'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className='btn btn-primary btn-block'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MultipleForms
