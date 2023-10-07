import { Component } from 'react'
import axios from 'axios'

class GithubUserInfo extends Component {
  constructor (props) {
    super(props)
    this.state = { imgUrl: '', name: '' }
  }

  async componentDidMount () {
    const url = `https://api.github.com/users/${this.props.username}`
    const response = await axios.get(url)
    const data = response.data
    console.log(data)
    this.setState({ imgUrl: data.avatar_url, name: data.name })
  }

  render () {
    return (
      <>
        <h1>Github User: {this.state.name}</h1>
        <img src={this.state.imgUrl} alt='user info' />
      </>
    )
  }
}

export default GithubUserInfo