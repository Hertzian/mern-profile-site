import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import Note1 from '../../study/note1/Note1'
import Note2 from '../../study/note2/Note2'
import Note3 from '../../study/note3/Note3'
import Note4 from '../../study/note4/Note4'
import Note5 from '../../study/note5/Note5'
import Note6 from '../../study/note6/Note6'
import Note7 from '../../study/note7/Note7'
import Note8 from '../../study/note8/Note8'
import Note9 from '../../study/note9/Note9'

const StudySection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header={'This is the study section :D'}>
        <h3>Welcome to the study section, enjoy your stay</h3>
        <Card header='Note1 Props inmutables'>
          <Note1 />
        </Card>
        <Card header='Note2 SlotMachine'>
          <Note2 />
        </Card>
        <Card header='Note3 Looping'>
          <Note3 />
        </Card>
        <Card header='Note4 Default Props'>
          <Note4 />
        </Card>
        <Card header='Note5 Styling'>
          <Note5 />
        </Card>
        <Card header='Note6 Fruits modules'>
          <Note6 />
        </Card>
        <Card header='Note7 Pokedex'>
          <Note7 />
        </Card>
        <Card header='Note8 Pokedex'>
          <Note8 />
        </Card>
        <Card header='Note9 State patters'>
          <Note9 />
        </Card>
      </Card>
    </AdminPage>
  )
}

export default StudySection
