import Card from './Card'
import ImageUpload from './ImageUpload'

function ProfileImages() {
  return (
    <Card header='Images' title='Modify your main images'>
      <div className='row'>
        <ImageUpload label={'portrait'} section={'users'} />
        <ImageUpload label={'background'} section={'users'} />
      </div>
    </Card>
  )
}

export default ProfileImages 
