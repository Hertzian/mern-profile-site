const Loader = () => {
  const style = { width: '3rem', height: '3rem' }

  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-border'
        style={style}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loader
