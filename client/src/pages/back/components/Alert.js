import { connect } from 'react-redux'
import PropsTypes from 'prop-types'

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
}

Alert.propsTypes = {
  alerts: PropsTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
