import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import Note1 from './components/note1/Note1'
import Note2 from './components/note2/Note2'
import Note3 from './components/note3/Note3'
import Note4 from './components/note4/Note4'
import Note5 from './components/note5/Note5'
import Note6 from './components/note6/Note6'
import Note7 from './components/note7/Note7'
import Note8 from './components/note8/Note8'
import Note9 from './components/note9/Note9'
import Note10 from './components/note10/Note10'
import Note11 from './components/note11/Note11'
import Note12 from './components/note12/Note12'
import Note13 from './components/note13/Note13'
import Note14 from './components/note14/Note14'
import Note15 from './components/note15/Note15'
import Note16 from './components/note16/Note16'
import Note17 from './components/note17/Note17'
import Note18 from './components/note18/Note18'
import Note19 from './components/note19/Note19'

const StudySection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header='This is the study section :D'>
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
          <Note19 />
        </Card>
      </Card>
    </AdminPage>
  )
}

export default StudySection
