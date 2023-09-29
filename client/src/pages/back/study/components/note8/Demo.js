import React, { Component } from 'react'

class Demo extends Component {
  //constructor(props) {
  //super(props)
  //console.log(this.props)
  //}

  render() {
    return (
      <div>
        <h2>Demo component</h2>
        <h2>{this.props.animal} component</h2>
      </div>
    )
  }
}

export default Demo
