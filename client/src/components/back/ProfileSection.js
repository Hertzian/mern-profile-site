import TextInput from '../TextInput'
import AreaInput from '../AreaInput'

const ProfileSection = () => {
  return (
    <>
      <h1>ProfileSection</h1>
      <form action=''>
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
    </>
  )
}

export default ProfileSection
