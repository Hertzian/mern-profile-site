import './Note18.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Food from './Food'
import Meal from './Meal'
import FoorSearch from './FoodSeach'

function App() {
  return (
    <div className='App'>
      {/*this se component, is simpler*/}
      {/*but will not work if you neet to pass additional props*/}
      {/*
      <Route
        exact
        path='/yums/:name'
        render={(routeProps) => <Food name={routeProps.match.params.name} />}
      />
      */}

      {/*this uses render, less clean but more explicit*/}
      {/*and youn pass additional props*/}
      <Navbar />
      <Switch>
        {/*the next two routes function the same*/}
        {/*
        <Route
          exact
          path='/food/:name'
          render={(routeProps) => <Food {...routeProps} />}
        />
        */}
        <Route exact path='/food/:name' component={Food} />
        <Route
          exact
          path='/test/:name'
          render={(routeParams) => (
            <Food authenticated={true} {...routeParams} />
          )}
        />

        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
        {/*
        both works the same
        <Route
          exact
          path='/'
          render={(routeProps) => <FoorSearch {...routeProps} />}
        />
        */}
        <Route exact path='/' component={FoorSearch} />
        <Route render={() => <h1>Error 404</h1>} />
      </Switch>
    </div>
  )
}

export default App
