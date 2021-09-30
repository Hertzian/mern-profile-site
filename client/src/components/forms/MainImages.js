import { Component } from 'react'
import Card from '../Card'
import { image } from '../../dummy/dummy'

class MainImages extends Component {
  render() {
    return (
      <Card header='Images' title='Modify your main images'>
        <div className='row'>
          <form className='col-md-6'>
            <label htmlFor='profileImage'>Profile image</label>
            <input
              name='profileImage'
              className='form-control-file'
              type='file'
            />
            <img src={image} className='img-thumbnail' alt='just me' />
          </form>
          <form className='col-md-6'>
            <label htmlFor='backgroundImage'>Background image</label>
            <input
              name='backgroundImage'
              className='form-control-file'
              type='file'
            />
            <img
              src={image}
              className='img-thumbnail'
              alt='Beautifull background'
            />
          </form>
        </div>
      </Card>
    )
  }
}

export default MainImages
