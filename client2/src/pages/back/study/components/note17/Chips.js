import { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

export default class Chips extends Component {
  constructor (props) {
    super(props)
    this.state = { bags: [] }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const x = window.innerWidth * Math.random()
    const y = window.innerHeight * Math.random()
    this.setState((prevState) => ({ bags: [...prevState.bags, { x, y }] }))
  }

  render () {
    const chipsImg =
      'https://media.justo.mx/__sized__/products/7501011133921_bueno-thumbnail-540x540-70.jpg'
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipsImg}
        alt='bag of lays chips'
        style={{ height: '200px', top: `${bag.y}px`, left: `${bag.x}px` }}
      />
    ))

    return (
      <div>
        <Message>
          <h1>Chips</h1>
          <h2>bags eaten: {this.state.bags.length}</h2>
          <button onClick={this.handleClick}>nom nom nom</button>
          <h1>
            <Link to='/admin/study/vending-machine/'>Go back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    )
  }
}
