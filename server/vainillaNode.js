const http = require('http')
const projects = require('./config/_dummyData/data-store')
const PORT = 8000

const server = http.createServer((req, res) => {
  //'Should return 404 for an invalid route' /
  if (req.url === '/') {
    res.statusCode = 404
    return res.end(JSON.stringify({ message: 'NOT FOUND' }))
  }

  //'Should return a 400 if the request param is not valid - 1' /projects
  //'Should return a 400 if the request param is not valid - 2' /projects/
  if (req.url === '/projects' || req.url === '/projects/') {
    res.writeHead(400, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ message: 'BAD REQUEST' }))
  }

  if (req.url.match(/\/projects\/\w+/)) {
    const projectId = req.url.split('/')[2]
    projects.id = projectId
    //'Should return a 404 if the requested id is not present in data - 1' /projects/5
    //'Should return a 404 if the requested id is not present in data - 2' /projects/test
    if (!projects[projects.id]) {
      res.statusCode = 404
      return res.end(JSON.stringify({ message: 'NOT FOUND' }))
    }
    //'Should return the correct data with status 200' /projects/${id}
    if (projects.id) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      return res.end(JSON.stringify({ project: projects[projects.id - 1] }))
    }
  }
})

server.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))
module.exports = server
