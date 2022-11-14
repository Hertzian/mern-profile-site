import { Component } from 'react'
import Card from '../../../../components/Card'
import SimpleMainImages from '../../../../components/SimpleMainImages'

class MainImages extends Component {
  render() {
    return (
      <Card header='Images' title='Modify your main images'>
        <div className='row'>
          <SimpleMainImages label={'portrait'} section={'users'} />
          <SimpleMainImages label={'background'} section={'users'} />
        </div>
      </Card>
    )
  }
}

export default MainImages
