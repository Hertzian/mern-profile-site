import { useState } from "react"
import imagePlaceholder from '../../../utils/imagePlaceholder.jpg'
import capitalize from '../../../utils/capitalize'
import { useUploadPortraitMutation } from '../../../store'

function ImageUpload({ label, section, close }) {
  const initialState = {
    image: undefined, url: undefined
  }

  const [uploadPortrait] = useUploadPortraitMutation()
  const [imageState, setImageState] = useState(initialState)

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

    await uploadPortrait(formData)

    if (close) {
      close()
    }
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