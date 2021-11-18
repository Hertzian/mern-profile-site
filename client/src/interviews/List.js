import { useEffect, useState } from 'react'
import axios from 'axios'

export default function List() {
  const [users, setUsers] = useState([])
  const URL = 'https://reqres.in/api/users?page=2'

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get(URL)
      const data = res.data.data
      setUsers(data)
    }
    getUsers()
  }, [])

  const toggleShow = (userId) => {
    const showUsers = users.map((user) => {
      if (user.id === userId) return { ...user, show: !user.show }
      return user
    })
    setUsers(showUsers)
  }

  const clicable = users.map((user) => (
    <ListItem
      key={user.id}
      id={user.id}
      user={user.first_name}
      show={toggleShow}
    />
  ))

  const renderUsers = users
    .filter((user) => user.show)
    .map((user) => (
      <ListItem
        key={user.id}
        id={user.id}
        user={user.first_name}
        show={toggleShow}
      />
    ))

  return (
    <div style={{ display: 'flex' }}>
      <ul>{users && clicable}</ul>
      <ul>{renderUsers}</ul>
    </div>
  )
}

function ListItem(props) {
  const [clicked, setClicked] = useState(false)
  const { user, id, show } = props

  const handleClick = (e) => {
    show(id)
    setClicked(!clicked)
  }

  let style
  if (clicked) style = { backgroundColor: 'green' }

  return (
    <li style={style} onClick={handleClick}>
      {user}
    </li>
  )
}
