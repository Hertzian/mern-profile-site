const AdminFooter = (props) => {
  const date = new Date().getFullYear()

  return (
    <footer className='py-4 bg-light mt-auto'>
      <div className='container-fluid'>
        <div className='d-flex align-items-center justify-content-between small'>
          <div className='text-muted'>
            Copyright &copy; {props.name} {date}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter
