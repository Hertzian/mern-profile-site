import TextInput from '../../components/TextInput'
import AreaInput from '../../components/AreaInput'
import Card from '../../components/Card'
import { image } from '../../dummy/dummy'

const ProfileSection = () => {
  const dummyImage = image

  return (
    <>
      <Card header={'Profile'}>
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <TextInput lbl='Name' input='name' />
            </div>
            <div className='col-md-6'>
              <TextInput lbl='Surname' input='surname' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <TextInput lbl='Github' input='github' />
            </div>
            <div className='col-md-4'>
              <TextInput lbl='Linkedin' input='linkedin' />
            </div>
            <div className='col-md-4'>
              <TextInput lbl='Phone' input='phone' />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <AreaInput lbl='Bio' input='bio' />
            </div>
            <div className='col-md-6'>
              <AreaInput lbl='Profession' input='profession' />
            </div>
          </div>
          <button className='btn btn-primary'>Save</button>
        </form>
      </Card>

      <Card header={'Images'}>
        <div className='row'>
          <form className='col-md-6'>
            <label htmlFor='ProfileImage'>Profile Image</label>
            <input
              className='form-control-file'
              name='ProfileImage'
              type='file'
            />
            <img className='img-thumbnail' src={dummyImage} alt='' />
          </form>
          <form className='col-md-6'>
            <label htmlFor='BackgroundImage'>Background Image</label>
            <input
              className='form-control-file'
              name='BackgroundImage'
              type='file'
            />
            <img className='img-thumbnail' src={dummyImage} alt='' />
          </form>
        </div>
      </Card>

      <Card header={'Access data'}>
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <TextInput lbl='Email' input='email' />
            </div>
            <div className='col-md-6'>
              <TextInput lbl='Password' input='password' type='password' />
            </div>
          </div>

          <button className='btn btn-primary'>Save</button>
        </form>
      </Card>
    </>
  )
}

export default ProfileSection
