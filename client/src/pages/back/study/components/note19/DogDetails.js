import { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogDetails.css'

export default class DogDetails extends Component {
  render() {
    let { dog } = this.props

    return (
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='coll-11 col-lg-5'>
          <div className='card DogDetails-card'>
            <img className='card-img-top' src={dog.src} alt={dog.name} />
            <div className='card-body'>
              <h2 className='card-title'>{dog.name}</h2>
              <h4 className='card-subtitle text-mutted'>{dog.age} years old</h4>
            </div>
            <ul className='list-group list-group-flush'>
              {dog.facts.map((fact, i) => (
                <li key={i} className='list-group-item'>
                  {fact}
                </li>
              ))}
            </ul>
            <div className='card-body'>
              <Link to='/admin/study/dogs' className='btn btn-info'>
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
