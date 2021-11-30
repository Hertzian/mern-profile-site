import { Component } from 'react'
import axios from 'axios'

export default class ListCl extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
    this.toggleShow = this.toggleShow.bind(this)
  }

  async componentDidMount() {
    const URL = 'https://reqres.in/api/users?page=2'
    const res = await axios.get(URL)
    const data = res.data.data
    this.setState({ users: data })
  }

  toggleShow(userId) {
    const showUsers = this.state.users.map((user) => {
      if (user.id === userId) return { ...user, show: !user.show }
      return user
    })
    this.setState({ users: showUsers })
  }

  render() {
    const clickable = this.state.users.map((user) => (
      <ListItem
        key={user.id}
        id={user.id}
        user={user.first_name}
        show={this.toggleShow}
      />
    ))

    const renderUsers = this.state.users
      .filter((user) => user.show)
      .map((user) => (
        <ListItem key={user.id} id={user.id} user={user.first_name} />
      ))

    return (
      <>
        <h2 className='mt-2'>Clickable Items Cl </h2>
        <div style={{ display: 'flex' }}>
          <ul className='list-group mr-3'>{this.state.users && clickable}</ul>
          <ul className='list-group mr-3'>{renderUsers}</ul>
        </div>
      </>
    )
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.show(this.props.id)
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    let style
    if (this.state.clicked) style = { backgroundColor: 'green' }

    return (
      <li
        className='list-group-item'
        style={style}
        onClick={this.props.show && this.handleClick}
      >
        {this.props.user}
      </li>
    )
  }
}
