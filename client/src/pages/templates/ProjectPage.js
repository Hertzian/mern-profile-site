import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import '../../styles/front.css'

const DetailPage = () => {
  return (
    <>
      <Menu />
      <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Welcome to <strong> work name </strong>
        </h1>
        <p
          className='section__subtitle section__subtitle--intro txtType'
          data-wait='3000'
          data-words='["A short description of $work->name"]'
        ></p>
        <img className='intro__img' src='' alt='' />
      </section>

      <div className='portfolio-item-individual'>
        <p>
          <a className='btn' href='/'>
            This is the repo
          </a>
        </p>
        <p>
          <a className='btn' href='/'>
            You can visit workname from here
          </a>
        </p>
        <p> workdescription1</p>
        <img src='' alt='' />
        <p> $workdescription2 </p>
      </div>
      <Footer />
    </>
  )
}

export default DetailPage
