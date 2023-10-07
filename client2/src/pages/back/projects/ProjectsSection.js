import { useState } from 'react'
import AdminPage from '../AdminPage'
import Card from '../../../components/Card'
import ProjectModal from './components/ProjectModal'
import ButtonOpenModal from '../../../components/ButtonOpenModal'
import ConfirmModal from '../../../components/ConfirmModal'
import ImageModal from './components/ImageModal'
import { dummyData } from '../../../dummyEndpoints'

<<<<<<< Updated upstream:client2/src/pages/back/projects/ProjectsSection.js
class ProjectsSection extends Component {
  constructor (props) {
    super(props)
    this.state = { projects: [] }
    this.newProject = this.newProject.bind(this)
    this.updateProject = this.updateProject.bind(this)
    this.deleteProject = this.deleteProject.bind(this)
  }

  async componentDidMount () {
    const res = await axios.get('/api/projects/get-all')
    const projects = res.data.projects
    this.setState({ ...this.state, projects })
  }

  async newProject (newProject) {
    const res = await axios.post('/api/projects/new-project', newProject)
    const resProject = res.data.project
    this.setState({ projects: [...this.state.projects, resProject] })
  }

  async updateProject (projectId, updateProject) {
    const res = await axios.put(
      `/api/projects/update-project/${projectId}`,
      updateProject
    )
    const resProject = res.data.project
    const updatedProjects = this.state.projects.map((project) => {
      if (project._id === projectId) {
        return resProject
=======
const ProjectsSection = (props) => {
  const { projects: dummyProjects } = dummyData
  const [projects, setProjects] = useState(dummyProjects)

  const newProject = (newProject) => {
    setProjects({ ...projects, newProject })
  }

  const updateProject = (projectId, updateProject) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        return updateProject
>>>>>>> Stashed changes:client/src/pages/back/projects/ProjectsSection.js
      } else {
        return project
      }
    })
<<<<<<< Updated upstream:client2/src/pages/back/projects/ProjectsSection.js
    this.setState({ projects: updatedProjects })
  }

  async deleteProject (projectId) {
    await axios.delete(`/api/projects/delete-project/${projectId}`)
    this.setState({
      projects: this.state.projects.filter(
        (project) => project._id !== projectId
      )
    })
  }

  render () {
    const { projects } = this.state
    const projectsRender =
      projects &&
      projects.map((project) => {
        const { _id, name, url, repo, show } = project
        const showIcon =
          show === 'yes'
            ? (
              <td className='text-success'>
                <i className='far fa-check-circle fa-2x' />
              </td>
              )
            : (
              <td className='text-danger'>
                <i className='far fa-times-circle fa-2x' />
              </td>
              )
        return (
          <tr key={_id}>
            <td>{name}</td>
            <td>{url}</td>
            <td>{repo}</td>
            {showIcon}
            <td>
              <ButtonOpenModal
                target={`update-project-${_id}`}
                color='primary mr-2'
                label='Update'
              />
              <ProjectModal
                target={`update-project-${_id}`}
                isModify
                projectId={_id}
                addUpdateProject={this.updateProject}
              />
              <ButtonOpenModal
                target={`image-project-${_id}`}
                color='info mr-2'
                label='Img'
              />
              <ImageModal target={`image-project-${_id}`} imageId={_id} />
              <ButtonOpenModal
                target={`confirm-project-${_id}`}
                color='danger mr-2'
                label='X'
              />
              <ConfirmModal
                confirmFunction={this.deleteProject}
                itemId={_id}
                target={`confirm-project-${_id}`}
              />
            </td>
          </tr>
        )
      })
    return (
      <AdminPage {...this.props}>
        <Card header='Projects'>
          <ButtonOpenModal
            target='new-project'
            color='primary mb-2'
            label='New Project'
          />
          <ProjectModal
            target='new-project'
            isModify={false}
            addUpdateProject={this.newProject}
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
=======
    setProjects(updatedProjects)
  }

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId))
>>>>>>> Stashed changes:client/src/pages/back/projects/ProjectsSection.js
  }

  const projectsRender =
    projects && projects.map((project) => {
      const { id, name, url, repo, show } = project
      const showIcon = show
        ? (<td className='text-success'> <i className='far fa-check-circle fa-2x' /> </td>)
        : (<td className='text-danger'> <i className='far fa-times-circle fa-2x' /> </td>)
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
              isModify
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
      <Card header='Projects'>
        <ButtonOpenModal
          target='new-project'
          color='primary mb-2'
          label='New Project'
        />
        <ProjectModal
          target='new-project'
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