const Intro = () => {
  return (
    <section className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am <strong>name surname </strong>
      </h1>
      <p
        className='section__subtitle section__subtitle--intro txtType'
        data-wait='3000'
        data-words='[profesion-items]'
      ></p>
      <img className='intro__img' alt='just me' />
    </section>
  )
}

export default Intro
