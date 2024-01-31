import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import imagePlaceholder from '../../../utils/imagePlaceholder.jpg'
import capitalize from '../../../utils/capitalize'
import { useUploadPortraitMutation, useUploadBackgroundMutation, useUploadProjectImageMutation } from '../../../store'
import { setStateAlert } from '../../../store'
import { baseUrl } from "../../../utils/baseUrls"

function ImageUpload({ image, label, section, close, project }) {
  const dispatch = useDispatch()
  const initialState = {
    image: undefined, url: undefined
  }

  const [uploadPortrait] = useUploadPortraitMutation()
  const [uploadBackground] = useUploadBackgroundMutation()
  const [uploadProjectImage] = useUploadProjectImageMutation()
  const [imageState, setImageState] = useState(initialState)

  useEffect(() => {
    if (image) {
      setImageState({
        url: baseUrl + image
      })
    }
  }, [image])

  const handleChange = (e) => {
    setImageState({
      image: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (typeof imageState.image !== 'object') {
      return
    }

    const formData = new FormData()
    formData.append(label, imageState.image)

    let imageUploaded
    if (label === 'portrait') {
      imageUploaded = await uploadPortrait(formData)
    }
    if (label === 'background') {
      imageUploaded = await uploadBackground(formData)
    }
    if (label === 'project') {
      imageUploaded = await uploadProjectImage({ projectId: project.id, formData })
    }

    if (close) {
      close()
    }

    dispatch(setStateAlert({ msg: imageUploaded.data.msg, color: 'info' }))
  }

  const word = capitalize(label)
  const imageView = imageState.url || imagePlaceholder

  return (
    <form onSubmit={handleSubmit} className='col-md-6' encType='multipart/form-data' >
      <label htmlFor={`${label}Image`}>{`${word} image`}</label>
      <input
        name={label}
        onChange={handleChange}
        className='form-control-file'
        type='file'
      />
      <img src={imageView} className='img-thumbnail mt-2' alt={`just a ${label}`} />
      <button type='submit' className='btn btn-primary mt-2'>Save</button>
    </form>
  )
}

export default ImageUpload