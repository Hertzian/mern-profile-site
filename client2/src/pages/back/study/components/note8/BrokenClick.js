import React, { Component } from 'react'

class BrokenClick extends Component {
  state = { clicked: false }

  handleClick = (e) => {
    this.setState({ clicked: true })
  }

  render () {
    return (
      <>
        <h2>
          BrokenClick {this.state.clicked ? 'Clicked!!!' : 'Not Clicked...'}
        </h2>
        <button onClick={this.handleClick}>BrokenClick</button>
      </>
    )
  }
}

export default BrokenClick
