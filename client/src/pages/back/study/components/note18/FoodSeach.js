import { Component } from 'react'
import { Link } from 'react-router-dom'

class FoodSeatch extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  handleClick() {
    //do something
    console.log('saved your food to db!')
    //redirect somewhere else
    this.props.history.push(`/food/${this.state.query}`)
  }

  render() {
    return (
      <div>
        <h1>Search for a food!</h1>
        <input
          type='text'
          placeholder='search for a food'
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save new food!</button>
      </div>
    )
  }
}

export default FoodSeatch
