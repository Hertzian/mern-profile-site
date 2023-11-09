import { useState, useEffect } from "react"
import imagePlaceholder from '../../../utils/imagePlaceholder.jpg'
import capitalize from '../../../utils/capitalize'

function ImageUpload({ image, itemId, label, section, close }) {
  const initialState = {
    image: undefined, url: undefined
  }

  const [data, setData] = useState(initialState)

  const handleChange = (e) => {
    setData({
      image: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof data.image !== 'object') {
      return
    }

    const formData = new FormData()
    formData.append(label, image, image.name)
    // uploadToServer function & state handling here...
    if (close) {
      close()
    }
  }

  const word = capitalize(label)
  const imageView = data.url || imagePlaceholder

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