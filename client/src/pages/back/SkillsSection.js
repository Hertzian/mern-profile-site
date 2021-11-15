import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import Calculator from '../../components/temp/Calculator'

const SkillsSection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header={'Skills'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#skillModal'
        >
          New Skill
        </button>
        <Calculator />
      </Card>
    </AdminPage>
  )
}

export default SkillsSection
