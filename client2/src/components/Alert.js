import { connect } from 'react-redux'
import PropsTypes from 'prop-types'

<<<<<<< Updated upstream:client2/src/components/Alert.js
class Alert extends Component {
  render () {
    return (
      <div className={`alert alert-${this.props.color}`} role='alert'>
        {this.props.message}
      </div>
    )
  }
=======
const Alert = ({ alerts }) => {
  return (
    <>
      {alerts && alerts.map((alert) => (
        <div className={`alert alert-${alert.color}`} role='alert'>
          {alert.message}
        </div>
      ))}
    </>
  )
>>>>>>> Stashed changes:client/src/components/Alert.js
}

Alert.propsTypes = {
  alerts: PropsTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
