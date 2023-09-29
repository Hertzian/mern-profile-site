import { useState } from 'react'

export default function CustomerListFn () {
  const [customers, setCustomers] = useState([])

  const createCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer])
  }

  const deleteCustomer = (delCustomer) => {
    setCustomers(
      customers.filter((customer) => {
        return delCustomer !== customer
      })
    )
  }

  const custs = customers.map((customer, idx) => {
    return (
      <Customer
        key={idx}
        customer={customer}
        id={idx}
        delCustomer={deleteCustomer}
      />
    )
  })

  return (
    <>
      <h3 className='mt-2'>Functional component</h3>
      <CustomerForm newCustomer={createCustomer} />
      {custs.length >= 1 && <ul className='list-group'>{custs}</ul>}
    </>
  )
}

function CustomerForm (props) {
  const [customer, setCustomer] = useState('')

  const handleChange = (e) => {
    setCustomer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!customer) return
    props.newCustomer(customer)
    setCustomer('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <input
            className='form-control'
            type='text'
            name='customer'
            placeholder='Name'
            onChange={handleChange}
            value={customer}
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-primary'>Add Customer</button>
          </div>
        </div>
      </form>
    </>
  )
}

function Customer (props) {
  const deleteCustomer = () => {
    props.delCustomer(props.customer)
  }

  return (
    <li className='list-group-item' onClick={deleteCustomer}>
      {props.customer}
    </li>
  )
}
