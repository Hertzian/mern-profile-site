import { Component } from 'react'

class CustomerListCl extends Component {
  constructor(props) {
    super(props)
    this.state = { customers: [] }
    this.createCustomer = this.createCustomer.bind(this)
    this.deleteCustomer = this.deleteCustomer.bind(this)
  }

  createCustomer(newCustomer) {
    this.setState({ customers: [...this.state.customers, newCustomer] })
  }

  deleteCustomer(customerDel) {
    this.setState({
      customers: this.state.customers.filter(
        (customer) => customerDel !== customer
      )
    })
  }

  render() {
    const customers = this.state.customers.map((customer, idx) => {
      return (
        <Customer
          key={idx}
          customer={customer}
          id={idx}
          deleteCustomer={this.deleteCustomer}
        />
      )
    })

    return (
      <div>
        <h3>Class based component</h3>
        <CustomerForm newCustomer={this.createCustomer} />
        {this.state.customers.length >= 1 && <ul>{customers}</ul>}
      </div>
    )
  }
}
export default CustomerListCl

class CustomerForm extends Component {
  constructor(props) {
    super(props)
    this.state = { customer: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.customer) return
    this.props.newCustomer({ ...this.state })
    this.setState({ customer: '' })
  }

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='customer'
              placeholder='Name'
              value={this.state.customer}
              onChange={this.handleChange}
            />
            <button>Add customer</button>
          </form>
        </div>
      </>
    )
  }
}

class Customer extends Component {
  render() {
    const deleteCustomer = () => {
      this.props.deleteCustomer(this.props.customer)
    }

    return <li onClick={deleteCustomer}>{this.props.customer.customer}</li>
  }
}
