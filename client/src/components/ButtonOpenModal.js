const ButtonOpenModal = ({ className, target, dataid, legend }) => {
  return (
    <button
      data-toggle='modal'
      data-target={target}
      dataid={dataid}
      className={`btn ${className}`}
    >
      {legend}
    </button>
  )
}

export default ButtonOpenModal
