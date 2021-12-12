import { Component } from 'react'
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

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { user: '' }
  }

  componentDidMount() {
    this.loadUser()
  }
  async loadUser() {
    const res = await axios.get('/api/users/get-front-profile')
    const userRes = res.data
    this.setState(userRes)
  }

  render() {
    const { user, places, skills, projects } = this.state
    const {
      name,
      lastname,
      portait,
      background,
      email,
      phone,
      github,
      linkedin,
      bio,
      profession
    } = user

    return (
      <>
        <Menu />
        <Intro
          name={name}
          lastname={lastname}
          portait={portait}
          profession={profession}
        />
        <Places places={places} background={background} />
        <About bio={bio} portait={portait} profession={profession} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact email={email} phone={phone} />
        <Footer
          name={name}
          lastname={lastname}
          github={github}
          linkedin={linkedin}
        />
      </>
    )
  }
}

export default HomePage
