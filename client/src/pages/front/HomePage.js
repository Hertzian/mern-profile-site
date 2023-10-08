import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/front.css'
import { useThunk } from '../../hooks/useThunk'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './partials/Footer'
import Intro from './components/Intro'
import Menu from './partials/Menu'
import Places from './components/Places'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { getFrontProfile } from '../../store'

function HomePage() {
  const [doFetchProfile, isLoading, loadingError] = useThunk(getFrontProfile)

  const { data } = useSelector((state) => {
    return state.users
  })

  const user = data
  useEffect(() => {
    doFetchProfile()
  }, [doFetchProfile])

  return (
    <>
      <Menu />
      {
        user && (
          <>
            <Intro name={user.name} lastname={user.lastname} portrait={user.portrait} profession={user.profession} />
            <Places places={user.places} background={user.background} />
            <Skills skills={user.skills} />
            <Projects projects={user.projects} />
            <About bio={user.bio} portrait={user.portrait} profession={user.profession} />
            <Contact email={user.email} phone={user.phone} />
            <Footer name={user.name} lastname={user.lastname} github={user.github} linkedin={user.linkedin} />
          </>
        )
      }
    </>
  )
}

export default HomePage
