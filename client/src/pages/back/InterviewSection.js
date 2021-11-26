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
          <ListFn />
          <ListCl />
        </Card>
        <Card header={'DivElement'}>
          <CustomerListCl />
          <CustomerListFn />
        </Card>
        <Card header={'Fetch practice'}>
          <FetchPracticeCl />
          <FetchPracticeFn />
        </Card>
      </Card>
    </AdminPage>
  )
}

export default InterviewSection
