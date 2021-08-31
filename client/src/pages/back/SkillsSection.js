import Card from '../../components/Card'
import SkillModal from '../../components/SkillModal'
import Table from '../../components/Table'

const SkillsSection = () => {
  const tableHead = ['Name', 'Value', 'Show', 'Actions']
  const tableBody = [
    {
      id: 1,
      name: 'English',
      value: '90',
      show: true
    },
    {
      id: 2,
      name: 'English',
      value: '90',
      show: false
    },
    {
      id: 3,
      name: 'English',
      value: '90',
      show: true
    }
  ]
  return (
    <>
      <Card header={'Skills'}>
        <button
          type='button'
          className='btn btn-primary mb-2'
          data-toggle='modal'
          data-target='#skillModal'
        >
          New Skill
        </button>
        <Table head={tableHead} body={tableBody} />
      </Card>
      <SkillModal id={`skillModal`} />
    </>
  )
}

export default SkillsSection
