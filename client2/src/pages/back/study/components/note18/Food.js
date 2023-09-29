import { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Food extends Component {
  render () {
    const name = this.props.match.params.name
    /// notfound route to redirect into 404 page
    // if(/\d/.test(name)) this.props.history.push('/notfound')
    const url = `https://source.unsplash.com/1600x900/?${name}`
    return (
      <div className='Food'>
        {/\d/.test(name)
          ? (
            <Redirect to='/notfound' />
            )
          : (
            <>
              {this.props.authenticated && <h2>Auth</h2>}
              <h1>I love to eat {name}</h1>
              <img src={url} alt={name} />
            </>
            )}
      </div>
    )
  }
}

export default Food
