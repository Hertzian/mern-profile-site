import { Component } from 'react'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { timer: new Date() }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: new Date() })
    }, 1000)
  }

  render() {
    return (
      <>
        <h2>timer</h2>
        <p>{this.state.timer.getSeconds()}</p>
        <p>{this.state.timer.getSeconds() < 30 && 'Hello cabrones'}</p>
      </>
    )
  }
}
