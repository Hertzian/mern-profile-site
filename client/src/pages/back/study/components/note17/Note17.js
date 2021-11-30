import './Vending.css'
import Navbar from './Navbar'
import Chips from './Chips'
import Sardines from './Sardines'
import Soda from './Soda'
import VendingMachine from './VendingMachine'
import { Route, Switch } from 'react-router-dom'

export default function Note17() {
  return (
    <div className='Vending'>
      <Navbar />
      <Switch>
        <Route
          exact
          path='/admin/study/vending-machine'
          render={() => <VendingMachine />}
        />
        <Route
          exact
          path='/admin/study/vending-machine/soda'
          render={() => <Soda />}
        />
        <Route
          exact
          path='/admin/study/vending-machine/sardines'
          render={() => <Sardines />}
        />
        <Route
          exact
          path='/admin/study/vending-machine/chips'
          render={() => <Chips />}
        />
      </Switch>
    </div>
  )
}
