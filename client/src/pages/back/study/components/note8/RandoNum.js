import React, { Component } from 'react'

class RandoNum extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    this.randomize = this.randomize.bind(this)
  }

  randomize(e) {
    //console.log(e)
    this.setState({ number: Math.floor(Math.random() * 10) + 1 })
  }

  render() {
    return (
      <div>
        <h2>Number is {this.state.number}</h2>

        {this.state.number === 7 ? (
          <h2>You Win!!!</h2>
        ) : (
          <button onClick={this.randomize}>Generate Random</button>
        )}
      </div>
    )
  }
}

export default RandoNum
