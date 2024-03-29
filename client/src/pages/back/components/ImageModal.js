import closeModal from '../../../utils/closeModal'
import ImageUpload from './ImageUpload'

function ImageModal({ target, project }) {
  const handleClose = () => closeModal(target)

  return (
    <div id={target} className='modal fade' tabIndex='-1' role='dialog' aria-labelledby='ModalLabel' aria-hidden='true' >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>Upload image</h5>

            <button type='button' className='close' data-dismiss='modal' aria-label='Close' >
              <span aria-hidden='true'>&times;</span>
            </button>

          </div>

          <div className='modal-body'>
            <ImageUpload
              project={project}
              image={project.image}
              close={handleClose}
              label='project'
              section='projects'
            />
          </div>

          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-dismiss='modal' >Close</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ImageModal
