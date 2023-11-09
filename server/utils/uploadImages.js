const path = require('path')
// const multer = require('multer')

// // config storage & have same name from upload field (name="imgFile")
// const storage = (newImageName) => {
//   multer.diskStorage({
//     destination: './public/uploads/',
//     filename: (req, file, cb) => {
//       cb(null, newImageName)
//     }
//   })
// }

const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test.mimetype

  if (extname && mimetype) return cb(null, true)
  return cb('Error: Images Only!')
}

// // parameter is for preserve same name from upload field (name="imgFile")
// const upload = (imageFile) => {
//   multer({
//     storage: storage(imageFile),
//     limits: { fileSize: 1000000 },
//     fileFilter: function (req, file, cb) {
//       checkFileType(file, cb)
//     }
//   }).single(imageFile)
// }

// module.exports = { upload }
