import { Component } from 'react'

export default class Note3 extends Component {
  render () {
    // const msgs = [
    // { id: 1, text: 'Grettings!' },
    // { id: 2, text: 'Goodbye!' }
    // ]
    return (
      <div>
        <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} />
        <Friend name='Frida' hobbies={['Drawing', 'Painting']} />
      </div>
    )
  }
}

class Friend extends Component {
  render () {
    const { name, hobbies } = this.props
    const lis = hobbies.map((hob, idx) => (
      <li key={idx}>
        {idx}.-{hob}
      </li>
    ))

    return (
      <div>
        <h1>{name}</h1>
        <ul>{lis}</ul>
      </div>
    )
  }
}
