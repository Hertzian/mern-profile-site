import { Component } from 'react'

class FetchPracticeCl extends Component {
  constructor (props) {
    super(props)
    this.state = { users: [] }
  }

  async componentDidMount () {
    const URL = 'https://reqres.in/api/users?page=2'
    const res = await fetch(URL)
    const data = await res.json()
    const users = data.data
    this.setState({ users })
  }

  render () {
    const users = this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.email}</td>
      </tr>
    ))

    return (
      <div className='col'>
        <h2>FetchPracticeCl</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>name</th>
              <th scope='col'>email</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
      </div>
    )
  }
}

export default FetchPracticeCl
