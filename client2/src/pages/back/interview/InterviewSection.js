import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import ListFn from './components/ListFn'
import ListCl from './components/ListCl'
import CustomerListCl from './components/CustomerListCl'
import CustomerListFn from './components/CustomerListFn'

const InterviewSection = (props) => {
  // const flex = { flexDirection: 'column' }
  return (
    <AdminPage>
      <Card header='Interview section'>
        <h3>Welcome to interviews section!</h3>
        <Card header='MedTrainer'>
          <div className='row'>
            <div className='col'>
              <ListFn />
            </div>
            <div className='col'>
              <ListCl />
            </div>
          </div>
        </Card>
        <Card header='DivElement'>
          <div className='row'>
            <div className='col'>
              <CustomerListCl />
            </div>
            <div className='col'>
              <CustomerListFn />
            </div>
          </div>
        </Card>
      </Card>
    </AdminPage>
  )
}

export default InterviewSection
