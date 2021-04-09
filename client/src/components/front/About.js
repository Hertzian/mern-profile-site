const About = () => {
  return (
    <section className='about-me' id='about'>
      <h2 className='section__title section__title--about'>About me</h2>
      <p
        className='section__subtitle section__subtitle--about txtType'
        data-wait='3000'
        data-words='[words]'
      ></p>

      <div className='about-me__body'>
        <p>bio </p>
      </div>

      <img className='about-me__img' src='' alt='duh...' />
    </section>
  )
}

export default About
