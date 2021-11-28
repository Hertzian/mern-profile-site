import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import ListFn from '../../interviews/ListFn'
import ListCl from '../../interviews/ListCl'
import CustomerListCl from '../../interviews/CustomerListCl'
import CustomerListFn from '../../interviews/CustomerListFn'

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
      </Card>
    </AdminPage>
  )
}

export default InterviewSection
