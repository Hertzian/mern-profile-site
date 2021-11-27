import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import ListFn from '../../interviews/ListFn'
import ListCl from '../../interviews/ListCl'
import CustomerListCl from '../../interviews/CustomerListCl'
import CustomerListFn from '../../interviews/CustomerListFn'
import FetchPracticeCl from '../../study/practice/FetchPracticeCl'
import FetchPracticeFn from '../../study/practice/FetchPracticeFn'

const InterviewSection = (props) => {
  //const flex = { flexDirection: 'column' }
  return (
    <AdminPage>
      <Card header={'Interview section'}>
        <h3>Welcome to interviews section!</h3>
        <Card header={'MedTrainer'}>
          <div className='row'>
            <div className='col'>
              <ListFn />
            </div>
            <div className='col'>
              <ListCl />
            </div>
          </div>
        </Card>
        <Card header={'DivElement'}>
          <div className='row'>
            <div className='col'>
              <CustomerListCl />
            </div>
            <div className='col'>
              <CustomerListFn />
            </div>
          </div>
        </Card>
        <Card header={'Fetch practice'}>
          <div className='row'>
            <div className='col'>
              <FetchPracticeCl />
            </div>
            <div className='col'>
              <FetchPracticeFn />
            </div>
          </div>
        </Card>
      </Card>
    </AdminPage>
  )
}

export default InterviewSection
