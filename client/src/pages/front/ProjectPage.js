import { Link } from 'react-router-dom'
import Menu from './partials/Menu'
import Footer from './partials/Footer'
import { dummyData } from '../../config/dummyEndpoints'
import '../../styles/front.css'

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
}

export default ProjectPage 
