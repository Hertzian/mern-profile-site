import { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>VendingMachine</h1>
        </Message>
        <Message>
          <Link to='/admin/study/vending-machine/soda'>Soda</Link>
          <Link to='/admin/study/vending-machine/chips'>Chips</Link>
          <Link to='/admin/study/vending-machine/sardines'>Sardines</Link>
        </Message>
      </div>
    )
  }
}
