import { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 3,
    allColors: ['purple', 'violet', 'pink', 'magenta']
  }

  render () {
    // console.log('boxContainer', this.props.allColors)

    const boxes = Array.from({ length: this.props.numBoxes }).map((c, idx) => (
      <Box key={idx} colors={this.props.allColors} />
      // <Box />
    ))
    // console.log(boxes.length)
    return <div className='BoxContainer'>{boxes}</div>
  }
}

export default BoxContainer
