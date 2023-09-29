import Card from '../../../../components/Card'
import SimpleMainImages from '../../../../components/SimpleMainImages'

<<<<<<< Updated upstream:client2/src/pages/back/profile/components/MainImages.js
class MainImages extends Component {
  render () {
    return (
      <Card header='Images' title='Modify your main images'>
        <div className='row'>
          <SimpleMainImages label='portrait' section='users' />
          <SimpleMainImages label='background' section='users' />
        </div>
      </Card>
    )
  }
=======
const MainImages = () => {
  return (
    <Card header='Images' title='Modify your main images'>
      <div className='row'>
        <SimpleMainImages label='portrait' section='users' />
        <SimpleMainImages label='background' section='users' />
      </div>
    </Card>
  )
>>>>>>> Stashed changes:client/src/pages/back/profile/components/MainImages.js
}

export default MainImages
