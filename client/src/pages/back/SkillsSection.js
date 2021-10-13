import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'

const SkillsSection = () => {
  return (
    <AdminPage>
      <Card header={'Skills'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#skillModal'
        >
          New Skill
        </button>
      </Card>
    </AdminPage>
  )
}

export default SkillsSection
