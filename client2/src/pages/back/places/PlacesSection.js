import { useState } from 'react'
import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import ButtonOpenModal from '../../../components/ButtonOpenModal'
import PlaceModal from './components/PlaceModal'
import ConfirmModal from '../../../components/ConfirmModal'
import { dummyData } from '../../../dummyEndpoints'

<<<<<<< Updated upstream:client2/src/pages/back/places/PlacesSection.js
class PlacesSection extends Component {
  constructor (props) {
    super(props)
    this.state = { places: [] }
    this.newPlace = this.newPlace.bind(this)
    this.updatePlace = this.updatePlace.bind(this)
    this.deletePlace = this.deletePlace.bind(this)
  }

  async componentDidMount () {
    this.getPlaces()
  }

  async getPlaces () {
    try {
      const res = await axios.get('/api/places/get-all')
      this.setState({ places: res.data.places })
    } catch (err) {
      console.log(err)
    }
  }

  async newPlace (newPlace) {
    const res = await axios.post('/api/places/new-place', newPlace)
    const newPlaceRes = res.data.place
    this.setState({ places: [...this.state.places, newPlaceRes] })
  }

  async updatePlace (placeId, updatedPlace) {
    console.log(placeId)
    await axios.put(`/api/places/update-place/${placeId}`, updatedPlace)
    const updatedPlaces = this.state.places.map((place) => {
      if (place._id === placeId) {
=======
const PlacesSection = (props) => {
  const { places: perrito } = dummyData
  const [places, setPlaces] = useState(perrito)

  const newPlace = (newPlace) => {
    setPlaces({ ...places, newPlace })
  }

  const updatePlace = (placeId, updatedPlace) => {
    const updatedPlaces = places.find((place) => {
      if (place.id === placeId) {
>>>>>>> Stashed changes:client/src/pages/back/places/PlacesSection.js
        return updatedPlace
      }
      return place
    })

    setPlaces({ ...places, updatedPlaces })
  }

<<<<<<< Updated upstream:client2/src/pages/back/places/PlacesSection.js
  async deletePlace (placeId) {
    await axios.delete(`/api/places/delete-place/${placeId}`)
    this.setState({
      places: this.state.places.filter((place) => place._id !== placeId)
    })
  }

  render () {
    const places = this.state.places.map((place) => {
      const { _id, company, year, assignment, show } = place
      const showIcon =
        show === 'yes'
          ? (
            <td className='text-success'>
              <i className='far fa-check-circle fa-2x' />
            </td>
            )
          : (
            <td className='text-danger'>
              <i className='far fa-times-circle fa-2x' />
            </td>
            )
      return (
        <tr key={_id}>
          <td>{company}</td>
          <td>{assignment}</td>
          <td>{year}</td>
          {showIcon}
          <td>
            <ButtonOpenModal
              target={`update-place-${_id}`}
              color='primary mr-2'
              label='Update'
            />
            <PlaceModal
              target={`update-place-${_id}`}
              isModify
              placeId={_id}
              addUpdatePlace={this.updatePlace}
            />
            <ButtonOpenModal
              target={`delete-place-${_id}`}
              color='danger mr-2'
              label='X'
            />
            <ConfirmModal
              confirmFunction={this.deletePlace}
              itemId={_id}
              target={`delete-place-${_id}`}
            />
          </td>
        </tr>
      )
    })

    return (
      <AdminPage {...this.props}>
        <Card header='Places'>
=======
  const deletePlace = (placeId) => {
    setPlaces({
      places: places.filter((place) => place.id !== placeId)
    })
  }

  const renderPlaces = places && places.map((place) => {
    const { id, company, year, assignment, show } = place
    const showIcon = show
      ? (<td className='text-success'> <i className='far fa-check-circle fa-2x' /> </td>)
      : (<td className='text-danger'> <i className='far fa-times-circle fa-2x' /> </td>)

    return (
      <tr key={id}>
        <td>{company}</td>
        <td>{assignment}</td>
        <td>{year}</td>
        {showIcon}
        <td>
>>>>>>> Stashed changes:client/src/pages/back/places/PlacesSection.js
          <ButtonOpenModal
            target={`update-place-${id}`}
            color='primary mr-2'
            label='Update'
          />
          <PlaceModal
            target={`update-place-${id}`}
            isModify
            placeId={id}
            addUpdatePlace={updatePlace}
          />
          <ButtonOpenModal
            target={`delete-place-${id}`}
            color='danger mr-2'
            label='X'
          />
          <ConfirmModal
            confirmFunction={deletePlace}
            itemId={id}
            target={`delete-place-${id}`}
          />
        </td>
      </tr>
    )
  })

  return (
    <AdminPage {...props}>
      <Card header='Places'>
        <ButtonOpenModal
          target='new-place'
          color='primary mb-2'
          label='New place'
        />
        <PlaceModal
          target='new-place'
          isModify={false}
          addUpdatePlace={newPlace}
        />
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
          <tbody>{renderPlaces}</tbody>
        </table>
      </Card>
    </AdminPage>
  )
}

export default PlacesSection
