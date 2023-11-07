import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/Card'
import {
  // state handlers
  setStateAllPlaces, setStateNewPlace,
  deleteStatePlace, updateStatePlace,
  // api handlers
  useGetPlacesQuery, useCreatePlaceMutation,
  useDeletePlaceMutation, useUpdatePlaceMutation
} from '../../store'
import PlaceRow from './components/PlaceRow'
import ButtonOpenModal from './components/ButtonOpenModal'
import PlaceModal from './components/PlaceModal'
import Loader from './components/Loader'


function PlacesSection(props) {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetPlacesQuery()
  const [createPlace] = useCreatePlaceMutation()
  const [updatePlace] = useUpdatePlaceMutation()
  const [deletePlace] = useDeletePlaceMutation()
  const placesState = useSelector(({ placesSlice }) => placesSlice.places)

  useEffect(() => {
    if (data) {
      dispatch(setStateAllPlaces(data.places))
    }
  }, [dispatch, data])

  const handleCreate = async (newPlace) => {
    const placeAdded = await createPlace(newPlace)
    dispatch(setStateNewPlace(placeAdded.data))
  }

  const handleUpdate = async (place) => {
    const updatedPlace = await updatePlace(place)
    dispatch(updateStatePlace(updatedPlace.data))
  }

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
        />
      )
    }
    )
    : null

  if (isLoading) { return <Loader /> }

  if (isError) { return <div>Error loading data.</div> }

  return (
    <>
      <Card header={'Places'}>
        <ButtonOpenModal target='new-place' color='primary mb-2' label='New Place' />
        <PlaceModal target='new-place' isUpdate={false} addUpdate={handleCreate} />
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
    </>
  )
}

export default PlacesSection
