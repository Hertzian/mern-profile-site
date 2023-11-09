import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  // state handlers
  useGetProjectsQuery, useCreateProjectMutation,
  useUpdateProjectMutation, useDeleteProjectMutation,
  // api handlers
  setStateNewProject, updateStateProject,
  setStateProjects, deleteStateProject
} from '../../store'
import Card from './components/Card'
import ProjectModal from './components/ProjectModal'
import ButtonOpenModal from './components/ButtonOpenModal'
import ProjectRow from './components/ProjectRow'
import Loader from './components/Loader'

function ProjectsSection(props) {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useGetProjectsQuery()
  const [createProject] = useCreateProjectMutation()
  const [updateProject] = useUpdateProjectMutation()
  const [deleteProject] = useDeleteProjectMutation()
  const projectsState = useSelector(({ projectsSlice }) => projectsSlice.projects)

  useEffect(() => {
    if (data) {
      dispatch(setStateProjects(data.projects))
    }
  }, [dispatch, data])

  const handleCreate = async (newProject) => {
    const projectAdded = await createProject(newProject)
    dispatch(setStateNewProject(projectAdded.data))
  }
  const handleUpdate = async (project) => {
    const projectUpdated = await updateProject(project)
    dispatch(updateStateProject(projectUpdated.data))
  }
  const handleDelete = async (projectId) => {
    const projectDeleted = await deleteProject(projectId)
    dispatch(deleteStateProject(projectDeleted.data))
  }

  const projects = projectsState
    ? projectsState.map((project) => {
      return (
        <ProjectRow
          key={project.id}
          project={project}
          deleteFn={handleDelete}
          updateFn={handleUpdate}
        />
      )
    })
    : null

  if (isLoading) { return <Loader /> }

  if (isError) { return <div>Error loading data.</div> }

  return (
    <Card header={'Projects'}>
      <ButtonOpenModal
        target='new-project'
        color='primary mb-2'
        label='New Project'
      />
      <ProjectModal
        target={'new-project'}
        isModify={false}
        addUpdate={handleCreate}
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
        <tbody>{projects}</tbody>
      </table>
    </Card>
  )
}

export default ProjectsSection
