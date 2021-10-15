import { Component } from 'react'
import AdminPage from '../templates/AdminPage'
import Card from '../../components/Card'
import ButtonOpenModal from '../../components/ButtonOpenModal'
import PlaceModal from '../../components/PlaceModal'

class PlacesSection extends Component {
  render() {
    return (
      <AdminPage {...this.props}>
        <Card header={'Places'}>
          <ButtonOpenModal
            target='new-place'
            color='primary mb-2'
            label='New place'
          />
          <PlaceModal target='new-place' isModify={true} />
          <table class='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Company</th>
                <th scope='col'>Job</th>
                <th scope='col'>Year</th>
                <th scope='col'>Show</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <ButtonOpenModal
                    target={`edit-place-`}
                    color='primary'
                    label='Update'
                  />
                  <ButtonOpenModal
                    target={`delete-place-`}
                    color='danger ml-2'
                    label='delete'
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </AdminPage>
    )
  }
}

export default PlacesSection
