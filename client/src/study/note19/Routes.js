import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DogList from './DogList'
import DogDetails from './DogDetails'

export default class Routes extends Component {
  render() {
    const getDog = (props) => {
      let name = props.match.params.name
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <Switch>
        <Route
          exact
          path='/admin/study/dogs'
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path='/admin/study/dogs/:name' render={getDog} />
        <Redirect to='/admin/study/dogs' />
      </Switch>
    )
  }
}
