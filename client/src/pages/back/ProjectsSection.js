import { useState } from 'react'
import AdminPage from './AdminPage'
import Card from './components/Card'
import ProjectModal from './components/ProjectModal'
import ButtonOpenModal from './components/ButtonOpenModal'
import ConfirmModal from './components/ConfirmModal'
import ImageModal from './components/ImageModal'

function ProjectsSection(props) {
  const [projects, setProjects] = useState([])
  const newProject = (newProject) => {
    setProjects({ ...projects })
  }
  const updateProject = (projectId, updateProject) => { }
  const deleteProject = (projectId) => { }

  const projectsRender =
    projects && projects.map((project) => {
      const { id, name, url, repo, show } = project
      const showIcon = show === 'yes'
        ? (
          <td className='text-success'>
            <i className='far fa-check-circle fa-2x'></i>
          </td>
        )
        : (
          <td className='text-danger'>
            <i className='far fa-times-circle fa-2x'></i>
          </td>
        )

      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{url}</td>
          <td>{repo}</td>
          {showIcon}
          <td>
            <ButtonOpenModal
              target={`update-project-${id}`}
              color='primary mr-2'
              label='Update'
            />
            <ProjectModal
              target={`update-project-${id}`}
              isModify={true}
              projectId={id}
              addUpdateProject={updateProject}
            />
            <ButtonOpenModal
              target={`image-project-${id}`}
              color='info mr-2'
              label='Img'
            />
            <ImageModal target={`image-project-${id}`} imageId={id} />
            <ButtonOpenModal
              target={`confirm-project-${id}`}
              color='danger mr-2'
              label='X'
            />
            <ConfirmModal
              confirmFunction={deleteProject}
              itemId={id}
              target={`confirm-project-${id}`}
            />
          </td>
        </tr>
      )
    })
  return (
    <AdminPage {...props}>
      <Card header={'Projects'}>
        <ButtonOpenModal
          target='new-project'
          color='primary mb-2'
          label='New Project'
        />
        <ProjectModal
          target={'new-project'}
          isModify={false}
          addUpdateProject={newProject}
        />
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>url</th>
              <th scope='col'>Github</th>
              <th scope='col'>Show</th>
              <th scope='col'>actions</th>
            </tr>
          </thead>
          <tbody>{projectsRender}</tbody>
        </table>
      </Card>
    </AdminPage>
  )
}

export default ProjectsSection
