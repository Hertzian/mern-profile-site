import { useEffect, useContext } from 'react'
import { PlaceContext } from '../../context/PlaceState'
import Card from '../../components/Card'
import PlaceModal from '../../components/PlaceModal'
import Table from '../../components/Table'
import Loader from '../../components/Loader'

const PlacesSection = () => {
  const placeContext = useContext(PlaceContext)
  const { places, loading, error, getPlaces } = placeContext

  const tableHead = ['Company', 'Job', 'Year', 'Show', 'Actions']
  //const tableBody = [
  //{
  //id: 1,
  //company: 'Dynamics',
  //job: 'FullStack developer',
  //year: '2019',
  //show: true
  //},
  //{
  //id: 2,
  //company: 'Dynamics',
  //job: 'FullStack developer',
  //year: '2019',
  //show: false
  //},
  //{
  //id: 3,
  //company: 'Dynamics',
  //job: 'FullStack developer',
  //year: '2019',
  //show: true
  //}
  //]

  useEffect(() => {
    getPlaces()
  }, [])
  console.log(places)

  return (
    <>
      <Card header={'Places'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#placeModal'
        >
          New Place
        </button>
        {loading && <Loader />}
        {places && <Table head={tableHead} body={places} />}
        {error && 'Theres no places...'}
      </Card>
      <PlaceModal id={`placeModal`} />
    </>
  )
}

export default PlacesSection
