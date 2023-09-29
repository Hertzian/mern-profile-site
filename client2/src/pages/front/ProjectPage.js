import { Link } from 'react-router-dom'
import Menu from './partials/Menu'
import Footer from './partials/Footer'
import { dummyData } from '../../dummyEndpoints'
import '../../styles/front.css'

<<<<<<< Updated upstream:client2/src/pages/front/ProjectPage.js
class DetailPage extends Component {
  constructor (props) {
    super(props)
    this.state = { project: '' }
  }

  async componentDidMount () {
    const projectId = this.props.match.params.projectId
    const res = await axios.get(`/api/projects/get-project/${projectId}`)
    const resProject = res.data.project
    this.setState({ project: resProject })
  }

  render () {
    const project = this.state.project && this.state.project
    // console.log(project)
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
=======
const ProjectPage = () => {
  const project = dummyData.projects[0]

  return (
    <>
      <Menu />
      <section className='intro' id='home'>
        <h1 className='section__title section__title--intro'>
          Welcome to <strong>{project.name}</strong>
        </h1>
        <img
          className='intro__img'
          src={project && `/public/uploads/${project.image}`}
          alt={`${project.name} project`}
        />
      </section>

      <div className='portfolio-item-individual'>
        <p>
          <a className='btn-front' href={`${project.repo}`}>
            This is the repo
          </a>
        </p>
        <p>
          <a className='btn-front' href={project.url}>
            You can visit {project.name} from here
          </a>
        </p>
        <p>
          <Link to='/' className='btn-front'>back</Link>
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
>>>>>>> Stashed changes:client/src/pages/front/ProjectPage.js
}

export default ProjectPage 
