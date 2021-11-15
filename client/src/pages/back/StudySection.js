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
import Note10 from '../../study/note10/Note10'
import Note11 from '../../study/note11/Note11'
import Note12 from '../../study/note12/Note12'
import Note13 from '../../study/note13/Note13'
import Note14 from '../../study/note14/Note14'
import Note15 from '../../study/note15/Note15'
import Note16 from '../../study/note16/Note16'
import Note17 from '../../study/note17/Note17'
import Note18 from '../../study/note18/Note18'
import Note19 from '../../study/note19/Note19'

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
        <Card header='Note10 Basic Forms'>
          <Note10 />
        </Card>
        <Card header='Note11 Color Box Maker'>
          <Note11 />
        </Card>
        <Card header='Note12 Todo list'>
          <Note12 />
        </Card>
        <Card header='Note13 Lifecycle Methods Zen App'>
          <Note13 />
        </Card>
        <Card header='Note14 Lifecycle Deck of Cards'>
          <Note14 />
        </Card>
        <Card header='Note15 Lifecycle Dad Jokes'>
          <Note15 />
        </Card>
        <Card header='Note16 Routing'>
          <Note16 />
        </Card>
        <Card header='Note17 More Routing'>
          <Note17 />
        </Card>
        <Card header='Note18 Route patterns'>
          <Note18 />
        </Card>
        <Card header='Note19 Route examples this one broke the app'>
          {
            //<Note19 />
          }
        </Card>
      </Card>
    </AdminPage>
  )
}

export default StudySection
