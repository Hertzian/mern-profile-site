import Card from '../Card'
import Table from '../Table'

const SkillsSection = () => {
  const tableHead = ['Name', 'Value', 'Show', 'Actions']
  const tableBody = [
    {
      name: 'English',
      value: '90',
      show: true
    },
    {
      name: 'English',
      value: '90',
      show: false
    },
    {
      name: 'English',
      value: '90',
      show: true
    }
  ]
  return (
    <>
      <h1 className='mt-4'>Skills</h1>
      <Card header={'Skills'}>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default SkillsSection
