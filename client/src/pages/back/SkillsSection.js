import { useState } from 'react'
import Card from './components/Card'
import ButtonOpenModal from './components/ButtonOpenModal'
import SkillModal from './components/SkillModal'
import ConfirmModal from './components/ConfirmModal'

function SkillsSection(props) {
  const [skills, setSkills] = useState([])
  const newSkill = () => { }
  const updateSkill = () => { }
  const deleteSkill = () => { }

  skills.map((skill) => {
    const { name, value, show, id } = skill
    const showIcon =
      show === 'yes'
        ? (<td className='text-success'> <i className='far fa-check-circle fa-2x'></i> </td>)
        : (<td className='text-danger'> <i className='far fa-times-circle fa-2x'></i> </td>)

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{value}</td>
        {showIcon}
        <td>
          <ButtonOpenModal
            target={`update-skill-${id}`}
            color='primary mr-2'
            label='Update'
          />
          <SkillModal
            target={`update-skill-${id}`}
            isModify={true}
            skillId={id}
            addUpdateSkill={updateSkill}
          />
          <ButtonOpenModal
            target={`confirm-skill-${id}`}
            color='danger mr-2'
            label='X'
          />
          <ConfirmModal
            confirmFunction={deleteSkill}
            itemId={id}
            target={`confirm-skill-${id}`}
          />
        </td>
      </tr>
    )
  })

  return (
    <>
      <Card header={'Skills'}>
        <ButtonOpenModal
          target='new-skill'
          color='primary mb-2'
          label='New Project'
        />
        <SkillModal
          target={'new-skill'}
          isModify={false}
          addUpdateProject={newSkill}
        />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>url</th>
              <th scope='col'>Github</th>
              <th scope='col'>Show</th>
              <th scope='col'>actions</th>
            </tr>
          </thead>
          <tbody>{skills}</tbody>
        </table>
      </Card>
    </>
  )
}

export default SkillsSection
