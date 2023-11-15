import Card from './Card'
import ImageUpload from './ImageUpload'

function ProfileImages({ images }) {
  let portrait, background
  if (images) {
    portrait = images.portrait
    background = images.background
  }

  return (
    <Card header='Images' title='Modify your main images'>
      <div className='row'>
        <ImageUpload label={'portrait'} section={'users'} image={portrait} />
        <ImageUpload label={'background'} section={'users'} image={background} />
      </div>
    </Card>
  )
}

export default ProfileImages 
