import { Component } from 'react'
import { v4 } from 'uuid'

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: '', width: '', color: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newBox = { ...this.state, id: v4() }
    this.props.createBox(newBox)
    this.setState({ height: '', width: '', color: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height</label>
          <input
            id='height'
            name='height'
            value={this.state.height}
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width</label>
          <input
            id='width'
            name='width'
            value={this.state.width}
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <input
            id='color'
            name='color'
            value={this.state.color}
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <button>Add new box</button>
      </form>
    )
  }
}
