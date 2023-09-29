const Places = ({ places, background }) => {
  const style = background && { background: `url(${background})` }

  const showPlaces =
    places &&
    places.map((place) => (
      <div key={place.id} className='service'>
        <h3>{place.company}</h3>
        <p>{place.job}</p>
        <p>{place.assignment}</p>
      </div>
    ))

  return (
    <section className='my-services' id='services' style={style}>
      <h2 className='section__title section__title--services'>
        My professional experience
      </h2>
      <div className='services'>{showPlaces}</div>
      <a href='#work' className='btn'>
        My work
      </a>
    </section>
  )
}

export default Places
