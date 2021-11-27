import { Component } from 'react'

class ShoppingListForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', qty: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({ name: '', qty: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control mt-1'
            type='text'
            id='name'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            className='form-control mt-1'
            type='text'
            id='qty'
            name='qty'
            placeholder='quantity'
            value={this.state.qty}
            onChange={this.handleChange}
          />
        </div>
        <button className='btn btn-primary btn-block'>Add Item</button>
      </form>
    )
  }
}

export default ShoppingListForm
