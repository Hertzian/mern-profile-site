import React, { Component } from 'react'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      gameOver: false
    }
  }

  render() {
    return (
      <div>
        <h2>Game component</h2>
        <h2>Your score is: {this.state.score}</h2>
      </div>
    )
  }
}

export default Game
