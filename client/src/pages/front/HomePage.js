import { useGetGeneralProfileQuery } from '../../store'
import '../../styles/front.css'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './partials/Footer'
import Intro from './components/Intro'
import Menu from './partials/Menu'
import Places from './components/Places'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Loader from '../back/components/Loader'

function HomePage() {
  const { data, isFetching } = useGetGeneralProfileQuery()
  console.log(data)

  return (
    <>
      <Menu />
      {
        isFetching
          ? <Loader />
          : data && (
            <>
              <Intro name={data.name} lastname={data.lastName} portrait={data.portrait} profession={data.profession} />
              <Places places={data.places} background={data.background} />
              <Skills skills={data.skills} />
              <Projects projects={data.projects} />
              <About bio={data.bio} portrait={data.portrait} profession={data.profession} />
              <Contact email={data.email} phone={data.phone} />
              <Footer name={data.name} lastname={data.lastname} github={data.github} linkedin={data.linkedin} />
            </>
          )
      }
    </>
  )
}

export default HomePage
