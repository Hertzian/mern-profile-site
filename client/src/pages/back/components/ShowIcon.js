import { useEffect, useState } from "react"
import { FaTimes, FaCheck } from "react-icons/fa"

function ShowIcon({ updateFn, placeData }) {
  const handleClick = async () => {
    const updatePlace = {
      ...placeData,
      show: !placeData.show
    }
    await updateFn(updatePlace)
  }

  const showIcon = placeData.show
    ? <FaCheck size={'30px'} color="green" />
    : <FaTimes size={'30px'} color="red" />

  return (
    <>
      <div onClick={handleClick}>
        {showIcon}
        {/* <i className={showIcon} /> */}
      </div>
    </>
  )
}

export default ShowIcon