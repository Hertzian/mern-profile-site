import { baseUrl } from "../../../utils/baseUrls"

const Places = ({ places, background }) => {
  let style = {}
  if (background) {
    style = { background: `url(${baseUrl}${background})` }
  }

  let showPlaces = {}
  if (places && places.length) {
    showPlaces = places
      .filter((place) => place.show === true)
      .map((place) => {
        return (
          <div key={place.id} className='service'>
            <h3>{place.company}</h3>
            <p>{place.job}</p>
            <p>{place.assignment}</p>
          </div>
        )
      })
  }

  return (
    <section className='my-services' id='places' style={style}>
      <h2 className='section__title section__title--services'>
        My professional experience
      </h2>
      <div className='services'>
        {showPlaces}
      </div>
      <a href='#projects' className='btn-front'>
        My work
      </a>
    </section>
  )
}

export default Places
