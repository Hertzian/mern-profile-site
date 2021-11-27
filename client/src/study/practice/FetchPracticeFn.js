import { useState, useEffect } from 'react'

function FetchPracticeFn() {
  const [users, setUsers] = useState()

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
      <ul className='list-group mt-1' key={user.id}>
        <li className='list-group-item'>{user.id}</li>
        <li className='list-group-item'>{user.first_name}</li>
        <li className='list-group-item'>{user.email}</li>
      </ul>
    ))

  return (
    <div>
      <h2>FetchPracticeFn</h2>
      {renderUsers}
    </div>
  )
}

export default FetchPracticeFn
