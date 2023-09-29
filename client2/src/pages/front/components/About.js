import TypeWriter from '../../../components/TypeWriter'

const About = ({ bio, portrait, profession }) => {
  return (
    <section className='about-me' id='about'>
      <h2 className='section__title section__title--about'>About me</h2>

      <TypeWriter words={profession} />
      <div className='about-me__body'>
        <p>{bio} </p>
      </div>

      <img className='about-me__img' src={portrait} alt='duh...' />
    </section>
  )
}

export default About
