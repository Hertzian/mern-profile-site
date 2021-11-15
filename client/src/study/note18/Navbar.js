import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    alert('Logged you in!')
    this.props.history.push('/food/salmon')
  }

  render() {
    return (
      <div className='Navbar'>
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={this.props.history.goBack}>Go back</button>
      </div>
    )
  }
}

export default withRouter(Navbar)
