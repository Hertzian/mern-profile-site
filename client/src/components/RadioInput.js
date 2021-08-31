const RadioInput = ({ label, value, validation, checked, setter }) => {
  return (
    <>
      <div className={`form-check ${validation ? 'is-valid' : 'is-invalid'}`}>
        <input
          className='form-check-input'
          type='radio'
          name={checked}
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <label className='for-check-label' htmlFor={label}>
          {label}
        </label>
      </div>
    </>
  )
}

export default RadioInput
