import AdminPage from '../AdminPage'
import Card from '../../../components/Card'

const ProjectsSection = (props) => {
  return (
    <AdminPage {...props}>
      <Card header={'Projects'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#projectModal'
        >
          New Project
        </button>
      </Card>
    </AdminPage>
  )
}

export default ProjectsSection
