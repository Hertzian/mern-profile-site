import { useContext } from 'react'
import { PlaceContext } from '../context/PlaceState'
import Loader from './Loader'
import TextInput from './TextInput'
import YesNoInput from './YesNoInput'

const PlaceModal = (props) => {
  const placeContext = useContext(PlaceContext)
  const { loading, error } = placeContext
  const { allData } = props
  console.log('allData: ', allData)
  console.log('props: ', props)

  return (
    <>
      {loading && <Loader />}
      {error && 'This is an error...'}
      {allData && (
        <div
          className='modal fade'
          id={props.id}
          tabIndex='-1'
          role='dialog'
          aria-labelledby='placeModallabel'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Place
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form>
                  <TextInput
                    lbl='Company'
                    input='company'
                    value={allData.company}
                  />
                  <TextInput lbl='Job' input='job' value={allData.job} />
                  <TextInput lbl='Year' input='year' value={allData.year} />
                  <YesNoInput check={allData.show} />

                  <button type='button' className='btn btn-primary'>
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlaceModal
