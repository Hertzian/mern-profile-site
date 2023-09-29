import { useState } from 'react'
import axios from 'axios'

<<<<<<< Updated upstream:client2/src/components/SimpleMainImages.js
class SimpleMainImages extends Component {
  constructor (props) {
    super(props)
    this.state = { image: undefined, url: undefined }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.capitalize = this.capitalize.bind(this)
  }

  componentDidMount () {
    if (!this.props.image) this.loadImage()
  }

  async loadImage () {
=======
const SimpleMainImages = (props) => {
  const [formData, setFormData] = useState({ image: undefined, url: undefined })
  const { image, url } = formData
  const { label, close } = props

  const loadImage = async () => {
>>>>>>> Stashed changes:client/src/components/SimpleMainImages.js
    const res = await axios.get(
      props.itemId
        ? `/api/${props.section}/load-${props.label}/${props.itemId}`
        : `/api/${props.section}/load-${props.label}`
    )
    const image = res.data.image
<<<<<<< Updated upstream:client2/src/components/SimpleMainImages.js
    this.setState({ image, url: `/public/uploads/${image}` })
  }

  async imageUpload (label, formData) {
    const res = await axios.post(
      this.props.itemId
        ? `/api/${this.props.section}/upload-${label}/${this.props.itemId}`
        : `/api/${this.props.section}/upload-${label}`,
      formData
    )
    const image = res.data
    this.setState({ image })
  }

  handleChange (e) {
    this.setState({
=======
    setFormData({ image, url: `/public/uploads/${image}` })
  }

  const imageUpload = async (label, formData) => {
    const res = await axios.post(
      this.props.itemId
        ? `/api/${props.section}/upload-${label}/${props.itemId}`
        : `/api/${props.section}/upload-${label}`,
      formData
    )
    setFormData(res.data)
  }

  const handleChange = (e) => {
    setFormData({
>>>>>>> Stashed changes:client/src/components/SimpleMainImages.js
      image: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }

<<<<<<< Updated upstream:client2/src/components/SimpleMainImages.js
  handleSubmit (e) {
=======
  const handleSubmit = (e) => {
>>>>>>> Stashed changes:client/src/components/SimpleMainImages.js
    e.preventDefault()
    if (typeof image !== 'object') {
      return
    }

    const formData = new FormData()
    formData.append(label, image, image.name)
    imageUpload(label, formData)
    props.close && props.close()
  }

<<<<<<< Updated upstream:client2/src/components/SimpleMainImages.js
  capitalize (str) {
=======
  const capitalize = (str) => {
>>>>>>> Stashed changes:client/src/components/SimpleMainImages.js
    const words = []
    for (const word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
  }

<<<<<<< Updated upstream:client2/src/components/SimpleMainImages.js
  render () {
    const { label } = this.props
    const word = this.capitalize(label)
=======
  const word = capitalize(label)
>>>>>>> Stashed changes:client/src/components/SimpleMainImages.js

  return (
    <form
      onSubmit={handleSubmit}
      className='col-md-6'
      encType='multipart/form-data'
    >
      <label htmlFor={`${label}Image`}>{`${word} image`}</label>
      <input
        name={label}
        className='form-control-file'
        type='file'
        onChange={handleChange}
      />
      <img
        src={url}
        className='img-thumbnail mt-2'
        alt={`just a ${label}`}
      />
      <button type='submit' className='btn btn-primary mt-2'>
        Save
      </button>
    </form>
  )
}

SimpleMainImages.defaultProps = {
  itemId: null
}

export default SimpleMainImages
