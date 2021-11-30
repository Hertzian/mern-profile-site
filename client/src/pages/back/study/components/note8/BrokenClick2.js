import React, { Component } from 'react'

class BrokenClick2 extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <>
        <h2>
          BrokenClick2 {this.state.clicked ? 'Clicked!!!' : 'Not Clicked...'}
        </h2>
        <button onClick={this.handleClick}>BrokenClick2</button>
      </>
    )
  }
}

export default BrokenClick2
