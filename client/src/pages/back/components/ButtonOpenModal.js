const ButtonOpenModal = ({ color, target, label }) => {
  return (
    <button
      type='button'
      data-toggle='modal'
      data-target={`#${target}`}
      className={`btn btn-${color}`}
    >
      {label}
    </button>
  )
}

export default ButtonOpenModal
