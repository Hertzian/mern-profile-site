import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../styles/front.css'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './partials/Footer'
import Intro from './components/Intro'
import Menu from './partials/Menu'
import Places from './components/Places'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useActions } from '../../hooks/useActions'

function HomePage() {
  const { getFrontProfile } = useActions()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    getFrontProfile()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Menu />
      {
        user && (
          <>
            <Intro name={user.user.name} lastname={user.user.lastname} portrait={user.user.portrait} profession={user.user.profession} />
            <Places places={user.places} background={user.background} />
            <Skills skills={user.skills} />
            <Projects projects={user.projects} />
            <About bio={user.user.bio} portrait={user.user.portrait} profession={user.user.profession} />
            <Contact email={user.user.email} phone={user.user.phone} />
            <Footer name={user.user.name} lastname={user.user.lastname} github={user.user.github} linkedin={user.user.linkedin} />
          </>
        )
      }
    </>
  )
}

export default HomePage
