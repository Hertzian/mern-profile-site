import { FaTimes, FaCheck } from "react-icons/fa"

function ShowIcon({ updateFn, itemData }) {
  const handleClick = async () => {
    const updateItem = {
      ...itemData,
      show: !itemData.show
    }
    await updateFn(updateItem)
  }

  let showIcon
  if (itemData) {
    showIcon = itemData.show
      ? <FaCheck size={'30px'} color="green" />
      : <FaTimes size={'30px'} color="red" />
  }

  return <div onClick={handleClick}>{showIcon}</div>
}

export default ShowIcon