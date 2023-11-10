import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  // api handlers
  useGetSkillsQuery, useCreateSkillMutation,
  useUpdateSkillMutation, useDeleteSkillMutation,
  // state handlers
  setStateSkills, setStateNewSkill,
  updateStateSkill, deleteStateSkill,
  setStateAlert
} from '../../store'
import Card from './components/Card'
import ButtonOpenModal from './components/ButtonOpenModal'
import SkillModal from './components/SkillModal'
import SkillRow from './components/SkillRow'
import Loader from './components/Loader'

function SkillsSection(props) {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetSkillsQuery()
  const [createSkill] = useCreateSkillMutation()
  const [updateSkill] = useUpdateSkillMutation()
  const [deleteSkill] = useDeleteSkillMutation()
  const skillsState = useSelector(({ skillsSlice }) => skillsSlice.skills)

  useEffect(() => {
    if (data) {
      dispatch(setStateSkills(data.skills))
    }
  }, [dispatch, data])

  const handleCreate = async (newSkill) => {
    const skillAdded = await createSkill(newSkill)
    dispatch(setStateNewSkill(skillAdded.data))
    dispatch(setStateAlert({ msg: skillAdded.data.msg, color: 'success' }))
  }
  const handleUpdate = async (skill) => {
    const skillUpdated = await updateSkill(skill)
    dispatch(updateStateSkill(skillUpdated.data))
    dispatch(setStateAlert({ msg: skillUpdated.data.msg, color: 'info' }))
  }
  const handleDelete = async (skillId) => {
    const skillDeleted = await deleteSkill(skillId)
    dispatch(deleteStateSkill(skillDeleted.data))
    dispatch(setStateAlert({ msg: skillDeleted.data.msg, color: 'danger' }))
  }

  const skills = skillsState
    ? skillsState.map((skill) => {
      return (
        <SkillRow
          key={skill.id}
          deleteFn={handleDelete}
          skill={skill}
          updateFn={handleUpdate}
        />
      )
    })
    : null

  if (isLoading) { return <Loader /> }

  if (isError) { return <div>Error loading data.</div> }

  return (
    <>
      <Card header={'Skills'}>
        <ButtonOpenModal target='new-skill' color='primary mb-2' label='New Skill' />
        <SkillModal target='new-skill' isUpdate={false} addUpdate={handleCreate} />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Value</th>
              <th scope='col'>Show</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>{skills}</tbody>
        </table>
      </Card>
    </>
  )
}

export default SkillsSection
