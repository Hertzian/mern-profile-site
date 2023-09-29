import { Component } from 'react'
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import './App.css'

class FakeRouting extends Component {
  constructor (props) {
    super(props)
    this.state = { page: 'about' }
    this.changePage = this.changePage.bind(this)
  }

  changePage (newPage) {
    this.setState({ page: newPage })
  }

  renderPage () {
    if (this.state.page === 'about') return <About />
    if (this.state.page === 'dog') return <Dog />
    if (this.state.page === 'contact') return <Contact />
  }

  render () {
    return (
      <div className='Note16'>
        <nav>
          <a onClick={() => this.changePage('dog')}>Dog</a>
          <a onClick={() => this.changePage('about')}>About</a>
          <a onClick={() => this.changePage('contact')}>Contact</a>
        </nav>
        {this.renderPage()}
      </div>
    )
  }
}

export default FakeRouting
