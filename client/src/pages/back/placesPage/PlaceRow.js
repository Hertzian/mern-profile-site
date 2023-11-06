import ButtonOpenModal from '../components/ButtonOpenModal'
import PlaceModal from '../components/PlaceModal'
import ConfirmModal from '../components/ConfirmModal'
import ShowIcon from '../components/ShowIcon'

function PlaceRow({ place, updateFn, deleteFn }) {
  const { id, company, assignment, year } = place

  return (
    <tr key={id}>
      <td>{company}</td>
      <td>{assignment}</td>
      <td>{year}</td>
      <td>
        <ShowIcon updateFn={updateFn} placeData={place} />
      </td>
      <td>
        <ButtonOpenModal target={`update-place-${id}`} color='primary mr-2' label='Update' />
        <PlaceModal target={`update-place-${id}`} isUpdate={true} addUpdatePlace={updateFn} placeData={place} />
        <ButtonOpenModal target={`delete-place-${id}`} color='danger mr-2' label='X' />
        <ConfirmModal confirmFunction={deleteFn} itemId={id} target={`delete-place-${id}`} />
      </td>
    </tr>
  )
}

export default PlaceRow