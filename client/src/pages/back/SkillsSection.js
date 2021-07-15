import Card from '../../components/Card'
import Table from '../../components/Table'

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
      <Card header={'Skills'}>
        <button className='btn btn-primary mb-2'>New Skill</button>
        <Table head={tableHead} body={tableBody} />
      </Card>
    </>
  )
}

export default SkillsSection
