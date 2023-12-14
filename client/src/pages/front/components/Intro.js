import TypeWriter from "./TypeWriter"

const Intro = ({ name, lastname, portrait, profession }) => {
  return (
    <section className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am
        <strong>
          {name}
        </strong>
        {lastname}
      </h1>
      <TypeWriter words={profession} />
      <img src={portrait} className='intro__img' alt='just me' />
    </section>
  )
}

export default Intro
