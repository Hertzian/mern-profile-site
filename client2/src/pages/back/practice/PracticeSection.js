import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import FetchPracticeCl from './components/fetchPractice/FetchPracticeCl'
import FetchPracticeFn from './components/fetchPractice/FetchPracticeFn'
import CalculatorCl from './components/tempCalc/CalculatorCl'
import CalculatorFn from './components/tempCalc/CalculatorFn'

const PracticeSection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header='This is the practice section:D'>
        <Card header='Fetch practice'>
          <div className='row'>
            <FetchPracticeCl />
            <FetchPracticeFn />
          </div>
        </Card>
        <Card header='Fetch practice'>
          <div className='row'>
            <CalculatorCl />
            <CalculatorFn />
          </div>
        </Card>
      </Card>
    </AdminPage>
  )
}
export default PracticeSection
