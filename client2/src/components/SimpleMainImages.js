import { Component } from 'react'
import axios from 'axios'

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
    const res = await axios.get(
      this.props.itemId
        ? `/api/${this.props.section}/load-${this.props.label}/${this.props.itemId}`
        : `/api/${this.props.section}/load-${this.props.label}`
    )
    const image = res.data.image
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
      image: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0])
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { label } = this.props
    const { image } = this.state
    if (typeof image !== 'object') return
    const formData = new FormData()
    formData.append(label, image, image.name)
    this.imageUpload(label, formData)
    this.props.close && this.props.close()
  }

  capitalize (str) {
    const words = []
    for (const word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
  }

  render () {
    const { label } = this.props
    const word = this.capitalize(label)

    return (
      <form
        onSubmit={this.handleSubmit}
        className='col-md-6'
        encType='multipart/form-data'
      >
        <label htmlFor={`${label}Image`}>{`${word} image`}</label>
        <input
          name={label}
          className='form-control-file'
          type='file'
          onChange={this.handleChange}
        />
        <img
          src={this.state.url}
          className='img-thumbnail mt-2'
          alt={`just a ${label}`}
        />
        <button type='submit' className='btn btn-primary mt-2'>
          Save
        </button>
      </form>
    )
  }
}

SimpleMainImages.defaultProps = {
  itemId: null
}

export default SimpleMainImages
