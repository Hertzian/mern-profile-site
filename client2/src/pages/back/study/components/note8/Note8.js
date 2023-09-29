import Game from './Game'
import Demo from './Demo'
import Rando from './Rando'
import Button from './Button'
import BrokenClick from './BrokenClick'
import BrokenClick2 from './BrokenClick2'
import RandoNum from './RandoNum'

export default function Note8 () {
  return (
    <div className='App'>
      <Game />
      <Demo animal='Perrito' food='Pineaple' />
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
      <BrokenClick2 />
      <RandoNum />
    </div>
  )
}
