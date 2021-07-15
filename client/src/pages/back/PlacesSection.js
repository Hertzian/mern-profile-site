import Card from '../../components/Card'
import Table from '../../components/Table'

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
      <Card header={'Places'}>
        <button className='btn btn-primary mb-2'>New Place</button>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default PlacesSection
