import { useEffect, useContext } from 'react'
import { PlaceContext } from '../../context/PlaceState'
import Card from '../../components/Card'
import PlaceModal from '../../components/PlaceModal'
import Table from '../../components/Table'
import Loader from '../../components/Loader'
import ButtonOpenModal from '../../components/ButtonOpenModal'

const PlacesSection = () => {
  const placeContext = useContext(PlaceContext)
  const { places, loading, error, getPlaces } = placeContext

  const tableHead = ['Company', 'Job', 'Year', 'Show', 'Actions']

  useEffect(() => {
    getPlaces()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Card header={'Places'}>
        <ButtonOpenModal
          toggle='modal'
          target='#new-place'
          className='btn btn-primary mb-2'
          legend='New place'
          dataid='new-place'
        />
        <PlaceModal allData={''} id={`new-place`} />
        {loading && <Loader />}
        {places && <Table head={tableHead} body={places} />}
        {error && 'Theres no places...'}
      </Card>
    </>
  )
}

export default PlacesSection
