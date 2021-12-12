import { Component } from 'react'
import axios from 'axios'
import Menu from './partials/Menu'
import Footer from './partials/Footer'
import Typewriter from '../../components/TypeWriter'
import '../../styles/front.css'

class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = { project: '' }
  }

  async componentDidMount() {
    const projectId = this.props.match.params.projectId
    const res = await axios.get(`/api/projects/get-project/${projectId}`)
    const resProject = res.data.project
    this.setState({ project: resProject })
  }

  render() {
    const project = this.state.project && this.state.project
    console.log(project)
    return (
      <>
        <Menu />
        <section className='intro' id='home'>
          <h1 className='section__title section__title--intro'>
            Welcome to <strong>{project.name}</strong>
          </h1>
          {project && <Typewriter words={`Welcome to ${project.name}`} />}
          <img
            className='intro__img'
            src={project && `/public/uploads/${project.image}`}
            alt={`${project.name} project`}
          />
        </section>

        <div className='portfolio-item-individual'>
          <p>
            <a className='btn' href={`${project.repo}`}>
              This is the repo
            </a>
          </p>
          <p>
            <a className='btn' href={project.url}>
              You can visit workname from here
            </a>
          </p>
          <p>{project.description}</p>
          <img
            src={project && `/public/uploads/${project.image}`}
            alt={`${project.name} project`}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default DetailPage
