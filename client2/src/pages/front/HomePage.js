import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './partials/Footer'
import Menu from './partials/Menu'
import Intro from './components/Intro'
import Places from './components/Places'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import '../../styles/front.css'

function HomePage() {
  const [data, setData] = useState({})

  const fetchUser = async () => {
    try {
      const res = await axios.get('/api/users/get-front-profile')
      const dataRes = res.data
      setData(dataRes)
    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  console.log(data)

  const {
    user: { name, lastname, email, phone, portrait, github, linkedin, profession, background, bio },
    places,
    skills,
    projects
  } = data

  return (
    <>
      <Menu />
      data && (
      <>
        < Intro name={name} lastname={lastname} portrait={portrait} profession={profession} />
        <Places places={places} background={background} />
        <About bio={bio} portrait={portrait} profession={profession} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact email={email} phone={phone} />
        <Footer name={name} lastname={lastname} github={github} linkedin={linkedin} />
      </>
      )
    </>
  )
}

export default HomePage
