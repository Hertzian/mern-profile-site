import { Link } from 'react-router-dom'
import { dummyData } from '../../../dummyEndpoints'

<<<<<<< Updated upstream:client2/src/pages/front/components/Projects.js
class Projects extends Component {
  render () {
    const { projects } = this.props
    const showProjects =
      projects &&
      projects.map((project) => (
        <Link
          key={project._id}
          id={`link-work-${project._id}`}
          to={`/project/${project._id}`}
          className='portfolio__item'
        >
          <img
            id={`pic-work-${project._id}`}
            className='portfolio__img'
            src={`/public/uploads/${project.image}`}
            alt={`project ${project.name}`}
          />
        </Link>
      ))
=======
const Projects = () => {
  const { projects } = dummyData
>>>>>>> Stashed changes:client/src/pages/front/components/Projects.js

  const showProjects =
    projects && projects.map((project) => (
      <Link
        key={project.id}
        id={`link-work-${project.id}`}
        to={`/project/${project.id}`}
        className='portfolio__item'
      >
        <img
          id={`pic-work-${project.id}`}
          className='portfolio__img'
          src={`/public/uploads/${project.image}`}
          alt={`project ${project.name}`}
        />
      </Link>
    ))

  return (
    <section className='my-work' id='work'>
      <h2 className='section__title section__title--work'>My work</h2>
      <p className='section__subtitle section__subtitle--work'>
        A selection of my range of work.
      </p>
      <div className='portfolio'>{showProjects}</div>
    </section>
  )
}

export default Projects
