import { Component } from 'react'
import axios from 'axios'

class SimpleMainImages extends Component {
  constructor(props) {
    super(props)
    this.state = { image: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.capitalize = this.capitalize.bind(this)
  }

  componentDidMount() {
    if (!this.props.image) this.loadImage()
  }
  async loadImage() {
    const res = await axios.get(`/api/users/load-${this.props.label}`)
    const image = res.data.image
    this.setState({ image })
  }
  async imageUpload(label, formData) {
    const res = await axios.post(`/api/users/upload-${label}`, formData)
    const image = res.data
    console.log(image)
    this.setState({ image: image })
  }

  handleChange(e) {
    this.setState({ image: e.target.files[0] })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { label } = this.props
    const { image } = this.state
    const formData = new FormData()
    formData.append(label, image, image.name)
    this.imageUpload(label, formData)
  }
  capitalize(str) {
    const words = []
    for (let word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
  }

  render() {
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
          src={`/public/uploads/${this.state.image}`}
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

export default SimpleMainImages