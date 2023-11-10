import { useSelector } from 'react-redux'

const Alert = () => {
  const alerts = useSelector(({ alertsSlice }) => alertsSlice)

  return (
    <>
      {alerts && alerts
        .map((alert) =>
          <div key={alert.id} className={`mt-2 alert alert-${alert.color}`} role='alert'>{alert.msg}</div>
        )
      }
    </>
  )
}

export default Alert
