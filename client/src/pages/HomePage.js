import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Intro from '../components/front/Intro'
import Places from '../components/front/Places'
import About from '../components/front/About'
import Skills from '../components/front/Skills'
import Projects from '../components/front/Projects'
import Contact from '../components/front/Contact'
import '../styles/front.css'

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
