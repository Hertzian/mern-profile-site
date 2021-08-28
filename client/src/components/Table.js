import PlaceModal from './PlaceModal'
import ProjectModal from './ProjectModal'
import SkillModal from './SkillModal'

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
                <button
                  data-toggle='modal'
                  data-target={`#${td.id}`}
                  className='btn btn-primary'
                >
                  Details
                </button>
                <button className='btn btn-danger ml-1'>
                  <i className='far fa-times-circle'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PlaceModal />

      {body.map(
        (th, idx) =>
          (th.value && <SkillModal />) ||
          (th.github && <ProjectModal />) ||
          (th.job && <PlaceModal key={idx} id={th.id} />)
      )}
    </>
  )
}

export default Table
