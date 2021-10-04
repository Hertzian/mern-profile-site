import { useEffect } from 'react'
import Card from '../../components/Card'
import ButtonOpenModal from '../../components/ButtonOpenModal'

const PlacesSection = () => {
  //const tableHead = ['Company', 'Job', 'Year', 'Show', 'Actions']

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card header={'Places'}>
      <ButtonOpenModal
        toggle='modal'
        target='#new-place'
        className='btn btn-primary mb-2'
        legend='New place'
        dataid='new-place'
      />
    </Card>
  )
}

export default PlacesSection
