function handleAll(event, { st, setSt }) {
  const { name, value, type, checked } = event.target

  if (type === 'radio') {
    setSt({ ...st, [name]: value === 'true' })
  } else {
    setSt((prevSt) => ({ ...prevSt, [name]: type === 'checkbox' ? checked : value }))
  }
}

export default handleAll