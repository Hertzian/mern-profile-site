import { Component } from 'react'
import { v4 } from 'uuid'
import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { name: 'milk', qty: '2 gallons', id: v4() },
        { name: 'bread', qty: '2 loaves', id: v4() }
      ]
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem (item) {
    const newItem = { ...item, id: v4() }
    this.setState((state) => ({
      items: [...state.items, newItem]
    }))
  }

  renderItems () {
    return (
      <ul className='list-group'>
        {this.state.items.map((item) => (
          <li className='list-group-item' key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    )
  }

  render () {
    return (
      <div>
        <h1>ShoppingList</h1>
        <ShoppingListForm addItem={this.addItem} />
        {this.renderItems()}
      </div>
    )
  }
}

export default ShoppingList
