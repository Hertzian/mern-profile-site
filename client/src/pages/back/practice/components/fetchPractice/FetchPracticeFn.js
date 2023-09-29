import { useState, useEffect } from 'react'

function FetchPracticeFn() {
  const [users, setUsers] = useState([])

  const URL = 'https://reqres.in/api/users?page=2'

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      const users = data.data
      setUsers(users)
    }
    getUsers()
  }, [])

  const renderUsers =
    users &&
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.email}</td>
      </tr>
    ))

  return (
    <div className='col'>
      <h2>FetchPracticeFn</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>name</th>
            <th scope='col'>email</th>
          </tr>
        </thead>
        <tbody>{renderUsers}</tbody>
      </table>
    </div>
  )
}

export default FetchPracticeFn
