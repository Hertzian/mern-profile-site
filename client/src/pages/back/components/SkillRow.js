import ButtonOpenModal from "./ButtonOpenModal"
import SkillModal from "./SkillModal"
import ConfirmModal from "./ConfirmModal"
import ShowIcon from "./ShowIcon"

function SkillRow({ skill, updateFn, deleteFn }) {
  const { id, name, value } = skill

  let renderSkillRow
  if (id) {
    renderSkillRow = (
      <tr key={id}>
        <td>{name}</td>
        <td>{value}</td>
        <td>
          <ShowIcon updateFn={updateFn} itemData={skill} />
        </td>
        <td>
          <ButtonOpenModal target={`update-skill-${id}`} color='primary mr-2' label='Update' />
          <SkillModal target={`update-skill-${id}`} isUpdate={true} itemData={skill} addUpdate={updateFn} />
          <ButtonOpenModal target={`delete-skill-${id}`} color='danger mr-2' label='X' />
          <ConfirmModal confirmFunction={deleteFn} itemId={id} target={`delete-skill-${id}`} />
        </td>
      </tr>
    )
  }

  return (
    <>
      {renderSkillRow}
    </>
  )
}

export default SkillRow