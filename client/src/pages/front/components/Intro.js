import TypeWriter from "./TypeWriter"
import { baseUrl } from "../../../utils/baseUrls"

const Intro = ({ name, lastname, portrait, profession }) => {
  return (
    <section className='intro' id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am
        <strong>
          {name || 'Lalo'}
        </strong>
        {lastname || 'Aguilar'}
      </h1>
      {
        profession && <TypeWriter words={profession} />
      }
      {
        portrait && <img src={baseUrl + portrait} className='intro__img' alt='just me' />
      }
    </section>
  )
}

export default Intro
