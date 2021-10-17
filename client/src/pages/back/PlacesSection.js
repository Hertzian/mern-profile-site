import { Component } from 'react'
import axios from 'axios'
import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import ButtonOpenModal from '../../components/ButtonOpenModal'
import PlaceModal from '../../components/PlaceModal'

class PlacesSection extends Component {
  constructor(props) {
    super(props)
    this.state = { places: [] }
  }

  async componentDidMount() {
    this.getPlaces()
  }

  async getPlaces() {
    try {
      let places = []
      let res = await axios.get('/api/places/get-all')
      for (let i = 0; i < res.data.places.length; i++) {
        places.push(res.data.places[i])
      }
      this.setState({ places: [...places] })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const places = this.state.places.map((place) => {
      return (
        <tr key={place._id}>
          <td>{place.company}</td>
          <td>{place.assignment}</td>
          <td>{place.year}</td>
          <td>{place.show}</td>
          <td>
            <ButtonOpenModal
              target={`update-place-${place._id}`}
              color='primary mr-2'
              label='Update'
            />
            <PlaceModal
              target={`update-place-${place._id}`}
              isModify={true}
              placeId={place._id}
            />
            <button className='btn btn-danger'>X</button>
          </td>
        </tr>
      )
    })

    return (
      <AdminPage {...this.props}>
        <Card header={'Places'}>
          <ButtonOpenModal
            target='new-place'
            color='primary mb-2'
            label='New place'
          />
          <PlaceModal target='new-place' isModify={false} />
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Company</th>
                <th scope='col'>Job</th>
                <th scope='col'>Year</th>
                <th scope='col'>Show</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>{places}</tbody>
          </table>
        </Card>
      </AdminPage>
    )
  }
}

export default PlacesSection
