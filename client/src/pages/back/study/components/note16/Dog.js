import { Component } from 'react'

class Dog extends Component {
  componentDidMount() {
    console.log('dog did mount!')
  }
  componentWillUnmount() {
    console.log('dog will unmount!')
  }
  render() {
    console.log('dog render')
    return (
      <div className='Note16-Dog'>
        <h1>Dog</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <p>(Dog picture shows...)</p>
      </div>
    )
  }
}

export default Dog
