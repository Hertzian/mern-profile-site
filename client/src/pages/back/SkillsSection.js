import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import CalculatorCl from '../../study/temp/CalculatorCl'
import CalculatorFn from '../../study/temp/CalculatorFn'

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
        <div className='row'>
          <div className='col'>
            <CalculatorCl />
          </div>
          <div className='col'>
            <CalculatorFn />
          </div>
        </div>
      </Card>
    </AdminPage>
  )
}

export default SkillsSection
