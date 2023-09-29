import React, { Component } from 'react'

class Rando extends Component {
  constructor(props) {
    super(props)
    this.state = { num: 0, color: 'purple' }
    this.makeTimer()
  }

  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum)
      this.setState({ num: rand })
    }, 1000)
  }

  render() {
    return (
      <>
        <h2>Rando component</h2>
        <h2>{this.state.num}</h2>
      </>
    )
  }
}

export default Rando
