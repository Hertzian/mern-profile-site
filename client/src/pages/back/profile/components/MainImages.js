import { Component } from 'react'
import Card from '../../../../components/Card'
import SimpleMainImages from './SimpleMainImages'

class MainImages extends Component {
  render() {
    return (
      <Card header='Images' title='Modify your main images'>
        <div className='row'>
          <SimpleMainImages label={'portait'} />
          <SimpleMainImages label={'background'} />
        </div>
      </Card>
    )
  }
}

export default MainImages
