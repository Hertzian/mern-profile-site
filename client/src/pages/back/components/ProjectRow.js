import ButtonOpenModal from "./ButtonOpenModal"
import ProjectModal from "./ProjectModal"
import ImageModal from "./ImageModal"
import ConfirmModal from "./ConfirmModal"
import ShowIcon from "./ShowIcon"

function ProjectRow({ project, updateFn, deleteFn }) {
  const { id, name, url, repo } = project

  let renderProject
  if (project.id) {
    renderProject = (
      <tr key={id}>
        <td>{name}</td>
        <td>{url}</td>
        <td>{repo}</td>
        <td>
          <ShowIcon updateFn={updateFn} itemData={project} />
        </td>
        <td>
          <ButtonOpenModal target={`update-project-${id}`} color='primary mr-2' label='Update' />
          <ProjectModal target={`update-project-${id}`} isUpdate={true} itemData={project} addUpdate={updateFn} />
          <ButtonOpenModal target={`image-project-${id}`} color='info mr-2' label='Img' />
          <ImageModal target={`image-project-${id}`} project={project} />
          <ButtonOpenModal target={`confirm-project-${id}`} color='danger mr-2' label='X' />
          <ConfirmModal confirmFunction={deleteFn} itemId={id} target={`confirm-project-${id}`} />
        </td>
      </tr>
    )
  }

  return renderProject
}

export default ProjectRow