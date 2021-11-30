import { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'

export default class ZenQuote extends Component {
  constructor(props) {
    console.log('inside constructor')
    super(props)
    this.state = { quote: '', isLoaded: false }
  }

  componentDidMount() {
    console.log('inside component did mount')
    //load data
    axios
      .get('https://api.github.com/zen')
      .then((response) => {
        setTimeout(
          function () {
            this.setState({ quote: response.data, isLoaded: true })
          }.bind(this),
          3000
        )
      })
      .catch((err) => console.log(err))
    //set state with data
  }

  componentDidUpdate() {
    console.log('inside component did update')
  }

  render() {
    console.log('inside render')
    return (
      <div>
        <h1>ZenQuote</h1>
        <h2>Always remember...</h2>
        {this.state.isLoaded ? (
          <>
            <p>{this.state.quote}</p>
          </>
        ) : (
          <>
            <div className='loader'></div>
          </>
        )}
      </div>
    )
  }
}
