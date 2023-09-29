import { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

class DogList extends Component {
  render () {
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center'>DogList</h1>
        <div className='row'>
          {this.props.dogs.map((d) => (
            <div className='Dog col-lg-4 col-md-6 text-center' key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3>
                <Link className='underline' to={`/admin/study/dogs/${d.name}`}>
                  {d.name}
                </Link>
              </h3>
            </div>
          ))}
          <Link to='/admin/study' className='btn btn-info'>
            Go back
          </Link>
        </div>
      </div>
    )
  }
}

export default DogList
