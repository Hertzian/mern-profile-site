import { Link } from 'react-router-dom'

const AdminFooter = () => {
  const date = new Date().getFullYear()

  return (
    <footer className='py-4 bg-light mt-auto'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center justify-content-between small'>
          <div className='text-muted'>Copyright &copy; Lalo Aguilar {date}</div>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter
