import { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

export default class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = { boxes: [] }
    this.create = this.create.bind(this)
    //this.remove = this.remove.bind(this)
  }

  create(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] })
  }

  remove(boxId) {
    this.setState({ boxes: this.state.boxes.filter((box) => box.id !== boxId) })
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        id={box.id}
        key={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={() => this.remove(box.id)}
      />
    ))

    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    )
  }
}
