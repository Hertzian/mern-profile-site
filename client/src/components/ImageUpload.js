import { useState, useRef, useEffect } from 'react'

const ImageUpload = (props) => {
  const [file, setFile] = useState(undefined)
  const [previewUrl, setPreviewUrl] = useState(undefined)
  const [isValid, setIsValid] = useState(false)

  const filePickerRef = useRef()

  useEffect(() => {
    if (!file) return

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const pickedHandler = (event) => {
    let pickedFile
    //let fileIsValid = isValid

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      //fileIsValid = true
    } else {
      setIsValid(false)
      //fileIsValid = false
    }
    //props.onInput(props.id, pickedFile, fileIsValid)
  }

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { label, upload } = props
    const formData = new FormData()
    formData.append(label, file, file.name)
    upload(label, formData)
    console.log(file.name)
    setFile(file.name)

    //console.log('image uploaded')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg'
        onChange={pickedHandler}
      />
      <div className='img'>
        <button
          className='btn btn-secondary mb-2'
          type='button'
          onClick={pickImageHandler}
        >
          Pick image
        </button>
        <div className=''>
          {previewUrl && (
            <img className='img-thumbnail' src={previewUrl} alt='Preview' />
          )}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
      </div>
      {!isValid && <p className='text-danger'>File upload Error</p>}
      {isValid && (
        <button type='submit' className='btn btn-primary'>
          Save image
        </button>
      )}
    </form>
  )
}

export default ImageUpload
