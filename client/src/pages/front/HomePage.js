import Footer from './partials/Footer'
import Menu from './partials/Menu'
import Intro from './components/Intro'
import Places from './components/Places'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import '../../styles/front.css'

const HomePage = () => {
  return (
    <>
      <Menu />
      <Intro />
      <Places />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
