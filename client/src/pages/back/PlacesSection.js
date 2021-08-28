import Card from '../../components/Card'
import PlaceModal from '../../components/PlaceModal'
import Table from '../../components/Table'

const PlacesSection = () => {
  const tableHead = ['Company', 'Job', 'Year', 'Show', 'Actions']
  const tableBody = [
    {
      id: 1,
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: true
    },
    {
      id: 2,
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: false
    },
    {
      id: 3,
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: true
    }
  ]

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
        <Table head={tableHead} body={tableBody} />
      </Card>
      <PlaceModal id={`placeModal`} />
    </>
  )
}

export default PlacesSection
