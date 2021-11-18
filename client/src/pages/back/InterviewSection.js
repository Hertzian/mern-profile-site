import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import List from '../../interviews/List'

const InterviewSection = (props) => {
  return (
    <AdminPage>
      <Card header={'Interview section'}>
        <h3>Welcome to interviews section!</h3>
        <Card header={'MedTrainer'}>
          <List />
        </Card>
      </Card>
    </AdminPage>
  )
}

export default InterviewSection
