import { Component } from 'react'

class FetchPracticeCl extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  async componentDidMount() {
    const URL = 'https://reqres.in/api/users?page=2'
    const res = await fetch(URL)
    const data = await res.json()
    const users = data.data
    this.setState({ users })
  }

  render() {
    const users = this.state.users.map((user) => (
      <ul key={user.id}>
        <li>{user.id}</li>
        <li>{user.first_name}</li>
        <li>{user.email}</li>
      </ul>
    ))

    return (
      <div>
        <h2>FetchPracticeCl</h2>
        {users}
      </div>
    )
  }
}

export default FetchPracticeCl
