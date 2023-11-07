import { thisYear } from "../../../utils/thisYear"

const AdminFooter = ({ siteName }) => {
  const date = thisYear()

  return (
    <footer className='py-4 bg-light mt-auto'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center justify-content-between small'>
          <div className='text-muted'>
            Copyright &copy; {siteName} {date}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter
