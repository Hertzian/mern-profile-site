import { Component } from 'react'
import './Note5.css'

export default class Note5 extends Component {
  render() {
    const arr = ['\u{1F352}', '\u{1F34A}', '\u{1F347}']
    return (
      <div>
        <h1>Slot Machines! {'\u{1F352}'}</h1>
        <Machine s1={arr[0]} s2={arr[1]} s3={arr[2]} />
        <Machine s1={arr[2]} s2={arr[2]} s3={arr[1]} />
        <Machine s1={arr[0]} s2={arr[0]} s3={arr[0]} />
      </div>
    )
  }
}

class Machine extends Component {
  render() {
    const { s1, s2, s3 } = this.props
    const isWinner = s1 === s2 && s2 === s3
    const colors = { fontSize: '50px', backgroundColor: 'purple' }

    return (
      <div className='Machine'>
        <label htmlFor='textInput' />
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <p className={isWinner ? 'win' : 'lose'}>
          {isWinner ? 'Winner :D' : 'Loser :('}
        </p>
      </div>
    )
  }
}
