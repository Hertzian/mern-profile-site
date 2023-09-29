import { Component } from 'react'

class Alert extends Component {
  render () {
    return (
      <div className={`alert alert-${this.props.color}`} role='alert'>
        {this.props.message}
      </div>
    )
  }
}

export default Alert
