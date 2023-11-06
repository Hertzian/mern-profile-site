import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminPage from './AdminPage'
import Card from './components/Card'
import {
  setStateAllPlaces, useGetAllPlacesQuery, setStateNewPlace,
  useCreatePlaceMutation, useDeletePlaceMutation, deleteStatePlace
} from '../../store'
import PlaceRow from './placesPage/PlaceRow'
import ButtonOpenModal from './components/ButtonOpenModal'
import PlaceModal from './components/PlaceModal'
import Loader from './components/Loader'


function PlacesSection(props) {
  const dispatch = useDispatch()
  const [createPlace] = useCreatePlaceMutation()
  const [deletePlace] = useDeletePlaceMutation()
  const { data, isLoading, isError } = useGetAllPlacesQuery()
  const placesState = useSelector(({ placesSlice }) => {
    return placesSlice.places
  })

  useEffect(() => {
    if (data) {
      dispatch(setStateAllPlaces(data.places))
    }
  }, [dispatch, data])

  const handleNew = async (newPlace) => {
    const placeAdded = await createPlace(newPlace)
    dispatch(setStateNewPlace(placeAdded.data))
  }

  const handleUpdate = () => { }

  const handleDelete = async (placeId) => {
    const placeDeleted = await deletePlace(placeId)
    dispatch(deleteStatePlace(placeDeleted.data))
  }

  const places = placesState
    ? placesState.map((place) => {
      return (
        <PlaceRow
          key={place.id}
          place={place}
          updateFn={handleUpdate}
          deleteFn={handleDelete}
          data={place}
        />
      )
    }
    )
    : null

  if (isLoading) { return <Loader /> }

  if (isError) { return <div>Error loading data.</div> }

  return (
    <AdminPage {...props}>
      <Card header={'Places'}>
        <ButtonOpenModal target='new-place' color='primary mb-2' label='New place' />
        <PlaceModal target='new-place' isUpdate={false} addUpdatePlace={handleNew} />
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

export default PlacesSection
