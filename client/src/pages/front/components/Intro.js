import { Component } from 'react'
import TypeWriter from '../../../components/TypeWriter'

class Intro extends Component {
  render() {
    const { name, lastname, portait, profession } = this.props
    return (
      <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Hi, I am
          <strong>
            {name} {lastname}
          </strong>
        </h1>
        <TypeWriter words={profession} />
        <img src={portait} className='intro__img' alt='just me' />
      </section>
    )
  }
}

export default Intro
