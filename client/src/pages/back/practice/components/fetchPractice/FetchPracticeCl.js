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
      <ul className='list-group mt-1' key={user.id}>
        <li className='list-group-item'>{user.id}</li>
        <li className='list-group-item'>{user.first_name}</li>
        <li className='list-group-item'>{user.email}</li>
      </ul>
    ))

    return (
      <div className='col'>
        <h2>FetchPracticeCl</h2>
        {users}
      </div>
    )
  }
}

export default FetchPracticeCl
