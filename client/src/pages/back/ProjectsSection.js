import Card from '../../components/Card'
import Table from '../../components/Table'

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
      <Card header={'Projects'}>
        <button className='btn btn-primary mb-2'>New Project</button>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default ProjectsSection
