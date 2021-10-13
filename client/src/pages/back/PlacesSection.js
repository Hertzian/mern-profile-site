import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import ButtonOpenModal from '../../components/ButtonOpenModal'

const PlacesSection = () => {
  return (
    <AdminPage>
      <Card header={'Places'}>
        <ButtonOpenModal
          toggle='modal'
          target='#new-place'
          className='btn btn-primary mb-2'
          legend='New place'
          dataid='new-place'
        />
      </Card>
    </AdminPage>
  )
}

export default PlacesSection
