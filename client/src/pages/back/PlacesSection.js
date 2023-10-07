import AdminPage from './AdminPage'
import Card from '../../components/Card'
import ButtonOpenModal from '../../components/ButtonOpenModal'
import PlaceModal from '../../components/PlaceModal'
import ConfirmModal from '../../components/ConfirmModal'
import { dummyData } from '../../dummyEndpoints'

function PlacesSection(props) {
  const newPlace = () => { }
  const updatePlace = () => { }
  const deletePlace = () => { }

  const places = dummyData.places.map((place) => {
    const { id, company, year, assignment, show } = place

    const showIcon = show === 'yes'
      ? (<td className='text-success'> <i className='far fa-check-circle fa-2x'></i> </td>)
      : (<td className='text-danger'> <i className='far fa-times-circle fa-2x'></i> </td>)

    return (
      <tr key={id}>
        <td>{company}</td>
        <td>{assignment}</td>
        <td>{year}</td>
        {showIcon}
        <td>
          <ButtonOpenModal
            target={`update-place-${id}`}
            color='primary mr-2'
            label='Update'
          />
          <PlaceModal
            target={`update-place-${id}`}
            isModify={true}
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
      <Card header={'Places'}>
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
          <tbody>{places}</tbody>
        </table>
      </Card>
    </AdminPage>
  )
}

export default PlacesSection
