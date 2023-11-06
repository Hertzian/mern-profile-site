import ButtonOpenModal from '../components/ButtonOpenModal'
import PlaceModal from '../components/PlaceModal'
import ConfirmModal from '../components/ConfirmModal'

function PlaceRow({ place, updateFn, deleteFn }) {
  const { id, company, assignment, year, show, } = place

  const showIcon = show === true
    ? <i className='far fa-check-circle fa-2x text-success' />
    : <i className='far fa-times-circle fa-2x text-danger' />

  return (
    <tr key={id}>
      <td>{company}</td>
      <td>{assignment}</td>
      <td>{year}</td>
      <td>{showIcon}</td>
      <td>
        <ButtonOpenModal target={`update-place-${id}`} color='primary mr-2' label='Update' />
        <PlaceModal target={`update-place-${id}`} isUpdate={true} placeId={id} addUpdatePlace={updateFn} />
        <ButtonOpenModal target={`delete-place-${id}`} color='danger mr-2' label='X' />
        <ConfirmModal confirmFunction={deleteFn} itemId={id} target={`delete-place-${id}`} />
      </td>
    </tr>
  )
}

export default PlaceRow