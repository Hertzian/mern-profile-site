import { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import './Note16.css'

const Hater = () => <h1>I absolute hate dogs!</h1>

export default class Note16 extends Component {
  render() {
    return (
      <div className='Note16'>
        <nav className='Note16-nav'>
          <NavLink
            exact
            activeClassName='Note16-active-link'
            to='/admin/study/perritos'
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName='Note16-active-link'
            to='/admin/study/perritos/dog/c'
          >
            Dog(c)
          </NavLink>
          <NavLink
            exact
            activeClassName='Note16-active-link'
            to='/admin/study/perritos/dog/r'
          >
            Dog(r)
          </NavLink>
          <NavLink
            exact
            activeClassName='Note16-active-link'
            to='/admin/study/perritos/contact'
          >
            Contact
          </NavLink>
        </nav>
        <Switch>
          {/* 
          to pass props in component
          <Route exact path='/dog' component={() => <Dog name='Perro'/>}/>
          to reuse the component, & prevent for render over and over
          <Route exact path='/dog' render={() => <Dog name='Perro'/>}/>
          */}
          <Route exact path='/admin/study/perritos' component={About} />
          <Route
            exact
            path='/admin/study/perritos/dog/c'
            component={() => <Dog name='componencio' />}
          />
          <Route
            exact
            path='/admin/study/perritos/dog/r'
            render={() => <Dog name='renderencio' />}
          />
          <Route
            exact
            path='/admin/study/perritos/dog/hater'
            component={Hater}
          />
          <Route
            exact
            path='/admin/study/perritos/contact'
            component={Contact}
          />
        </Switch>
      </div>
    )
  }
}
