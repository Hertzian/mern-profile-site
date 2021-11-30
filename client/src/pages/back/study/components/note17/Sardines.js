import { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

export default class Sardines extends Component {
  render() {
    return (
      <div
        className='Sardines'
        style={{
          backgroundImage:
            'url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)'
        }}
      >
        <Message>
          <h1>Sardines</h1>
          <Link to='/admin/study/vending-machine/'>Go back</Link>
        </Message>
      </div>
    )
  }
}
