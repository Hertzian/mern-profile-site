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
    this.placeChange = this.placeChange.bind(this)
  }

  async componentDidMount() {
    this.getPlaces()
  }

  async getPlaces() {
    try {
      const res = await axios.get('/api/places/get-all')
      this.setState({ places: res.data.places })
    } catch (err) {
      console.log(err)
    }
  }

  placeChange(place) {
    const removePlace = this.state.places.filter((p) => p._id !== place._id)
    console.log('remove: ', removePlace)

    this.setState({ places: [...this.state.places, place] })
    //this.state.places.filter((p) => p._id === place._id)
  }

  render() {
    const places = this.state.places.map((place) => {
      const { company, year, assignment, show, _id } = place
      return (
        <tr key={_id}>
          <td>{company}</td>
          <td>{assignment}</td>
          <td>{year}</td>
          <td>{show}</td>
          <td>
            <ButtonOpenModal
              target={`update-place-${_id}`}
              color='primary mr-2'
              label='Update'
            />
            <PlaceModal
              target={`update-place-${_id}`}
              isModify={true}
              placeId={_id}
              placeChange={this.placeChange}
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
                <th scope='col'>Assignment</th>
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
