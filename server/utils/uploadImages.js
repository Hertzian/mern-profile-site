const path = require('path')
const multer = require('multer')

function storage(fieldName, thingId) {
  let firstSegment = ''
  if (thingId) {
    firstSegment = `${thingId}-`
  }
  return multer.diskStorage({
    destination: './server/uploads/',
    filename: (req, file, cb) => cb(null, `${firstSegment}${fieldName}-${Date.now()}${path.extname(file.originalname)}`)
  })
}

function checkFileType(file, cb) {
  const fileTypes = /jpg|jpeg|png|gif/
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
  const mimeType = fileTypes.test(file.mimetype)

  if (extName && mimeType) return cb(null, true)
  return cb('Error: Images only!')
}

function upload(fieldName, thingId) {
  return multer({
    storage: storage(fieldName, thingId),
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => checkFileType(file, cb)
  }).single(fieldName)
}

module.exports = { upload }