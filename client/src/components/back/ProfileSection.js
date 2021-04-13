import TextInput from '../TextInput'
import AreaInput from '../AreaInput'
import Card from '../Card'

const ProfileSection = () => {
  return (
    <>
      <h1 className='mt-4'>Profile</h1>
      <Card header={'Profile'}>
        <form>
          <TextInput lbl='Name' input='name' />
          <TextInput lbl='Surname' input='surname' />
          <TextInput lbl='Github' input='github' />
          <TextInput lbl='Linkedin' input='linkedin' />
          <AreaInput lbl='Profession' input='profession' />
          <AreaInput lbl='Bio' input='bio' />
          <TextInput lbl='Phone' input='phone' />
          <TextInput lbl='Email' input='email' />
          <TextInput lbl='Password' input='password' type='password' />
        </form>
      </Card>
    </>
  )
}

export default ProfileSection
