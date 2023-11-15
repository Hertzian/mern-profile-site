import { Link } from 'react-router-dom'

const Projects = ({ projects }) => {
  let showProjects = {}
  if (projects && projects.length) {
    showProjects = projects
      .filter((project) => project.show === true)
      .map((project) => {
        return (
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
        )
      })
  }

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
