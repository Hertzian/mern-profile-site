import Card from '../Card'
import Table from '../Table'

const PlacesSection = () => {
  const tableHead = ['Company', 'Job', 'Year', 'Show', 'Actions']
  const tableBody = [
    {
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: true
    },
    {
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: false
    },
    {
      company: 'Dynamics',
      job: 'FullStack developer',
      year: '2019',
      show: true
    }
  ]

  return (
    <>
      <h1 className='mt-4'>Places</h1>
      <Card header={'Places'}>
        <p>PlacesSection</p>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default PlacesSection
