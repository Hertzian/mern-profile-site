import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import FetchPracticeCl from '../../study/practice/FetchPracticeCl'
import FetchPracticeFn from '../../study/practice/FetchPracticeFn'
import CalculatorCl from '../../study/temp/CalculatorCl'
import CalculatorFn from '../../study/temp/CalculatorFn'

const PracticeSection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header={'This is the practice section:D'}>
        <Card header={'Fetch practice'}>
          <div className='row'>
            <FetchPracticeCl />
            <FetchPracticeFn />
          </div>
        </Card>
        <Card header={'Fetch practice'}>
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
