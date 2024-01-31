import { Link, useParams } from 'react-router-dom'
import Menu from './partials/Menu'
import Footer from './partials/Footer'
import '../../styles/front.css'
import { useGetProjectQuery } from '../../store'
import Loader from '../back/components/Loader'
import { baseUrl } from '../../utils/baseUrls'

const ProjectPage = () => {
  const { projectId } = useParams()
  const { data, isLoading } = useGetProjectQuery(projectId)

  let renderContent
  if (isLoading) {
    renderContent = <Loader />
  }

  if (data) {
    renderContent =
      <>
        <section className='intro' id='home'>
          <h1 className='section__title section__title--intro'>
            Welcome to <strong>{data.name}</strong>
          </h1>
          <img className='intro__img' src={`${baseUrl}${data.image}`} alt={`${data.name} project`} />
        </section>

        <div className='portfolio-item-individual'>
          <p>
            <a className='btn-front' href={`${data.repo}`}> This is the repo </a>
          </p>
          <p>
            <a className='btn-front' href={data.url}> You can visit {data.name} from here </a>
          </p>
          <p>
            <Link to='/' className='btn-front'>back</Link>
          </p>
          <p>{data.description}</p>
          <img src={`${baseUrl}${data.image}`} alt={`${data.name} project`} />
        </div>
      </>
  }

  return (
    <>
      <Menu />
      {renderContent}
      <Footer />
    </>
  )
}

export default ProjectPage 
