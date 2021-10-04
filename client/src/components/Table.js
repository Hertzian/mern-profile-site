import ButtonOpenModal from './ButtonOpenModal'

const Table = (props) => {
  const { head, body } = props

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            {head.map((th, idx) => (
              <th scope='col' key={idx}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((td, idx) => (
            <tr key={idx}>
              <td>{td.company || td.name}</td>
              <td>{td.job || td.url || td.value}</td>
              {(td.year || td.github) && <td>{td.year || td.github}</td>}
              <td className={td.show ? 'text-success' : 'text-danger'}>
                {td.show ? (
                  <i className='far fa-check-circle'></i>
                ) : (
                  <i className='far fa-times-circle'></i>
                )}
              </td>
              <td>
                <ButtonOpenModal
                  target={
                    (td.job && `#placeModal-${td._id}`) ||
                    (td.value && `#skillModal-${td._id}`) ||
                    (td.github && `#projectModal-${td._id}`)
                  }
                  dataid={td._id}
                  className='btn-primary'
                  legend='Details'
                />
                <button className='btn btn-danger ml-1'>
                  <i className='far fa-times-circle'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
