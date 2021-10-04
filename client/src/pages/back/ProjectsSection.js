import Card from '../../components/Card'

const ProjectsSection = () => {
  const tableHead = ['Name', 'url', 'Github', 'Show', 'Actions']
  const tableBody = [
    {
      id: 1,
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: true
    },
    {
      id: 2,
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: false
    },
    {
      id: 3,
      name: 'Estrateva site',
      url: 'https://estrateva-node.herokuapp.com',
      github: 'https://github/Hertzian/estratevaLanding-node',
      show: true
    }
  ]
  return (
    <>
      <Card header={'Projects'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#projectModal'
        >
          New Project
        </button>
      </Card>
    </>
  )
}

export default ProjectsSection
