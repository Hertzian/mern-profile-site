import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import Intro from '../front/Intro'
import Places from '../front/Places'
import About from '../front/About'
import Skills from '../front/Skills'
import Projects from '../front/Projects'
import Contact from '../front/Contact'
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
