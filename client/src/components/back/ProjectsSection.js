import Card from '../Card'
import Table from '../Table'

const ProjectsSection = () => {
  const tableHead = ['Name', 'url', 'Github', 'Show', 'Actions']
  const tableBody = [
    {
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: true
    },
    {
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: false
    },
    {
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: true
    }
  ]
  return (
    <>
      <h1 className='mt-4'>Projects</h1>
      <Card header={'Projects'}>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default ProjectsSection
