import { Component } from 'react'
import { v4 } from 'uuid'

export default class NewBoxForm extends Component {
  constructor (props) {
    super(props)
    this.state = { height: '', width: '', color: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const newBox = { ...this.state, id: v4() }
    this.props.createBox(newBox)
    this.setState({ height: '', width: '', color: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control mt-1'
            placeholder='Height:'
            id='height'
            name='height'
            value={this.state.height}
            type='text'
            onChange={this.handleChange}
          />
          <input
            className='form-control mt-1'
            placeholder='Width:'
            id='width'
            name='width'
            value={this.state.width}
            type='text'
            onChange={this.handleChange}
          />
          <input
            className='form-control mt-1'
            placeholder='Color:'
            id='color'
            name='color'
            value={this.state.color}
            type='text'
            onChange={this.handleChange}
          />
        </div>
        <button className='btn btn-primary btn-block'>Add new box</button>
      </form>
    )
  }
}
