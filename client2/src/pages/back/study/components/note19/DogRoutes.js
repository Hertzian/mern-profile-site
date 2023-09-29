import { Component } from 'react'
import { Route } from 'react-router-dom'
import DogList from './DogList'
import DogDetails from './DogDetails'

export default class DogRoutes extends Component {
  render () {
    const getDog = (props) => {
      const name = props.match.params.name
      const currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <>
        <Route
          exact
          path='/admin/study/dogs'
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path='/admin/study/dogs/:name' render={getDog} />
      </>
    )
  }
}
