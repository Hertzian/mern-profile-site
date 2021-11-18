import { NavLink } from 'react-router-dom'
import Footer from './AdminFooter'

const AdminMenu = (props) => {
  const url = '/admin'

  return (
    <>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <nav
            className='sb-sidenav accordion sb-sidenav-dark'
            id='sidenavAccordion'
          >
            <div className='sb-sidenav-menu'>
              <div className='nav'>
                <div className='sb-sidenav-menu-heading'>Welcome</div>
                <NavLink className='nav-link' to={`${url}/profile`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-user'></i>
                  </div>
                  Profile
                </NavLink>
                <NavLink className='nav-link' to={`${url}/places`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Places
                </NavLink>
                <NavLink className='nav-link' to={`${url}/skills`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-table'></i>
                  </div>
                  Skills
                </NavLink>
                <NavLink className='nav-link' to={`${url}/projects`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-folder-plus'></i>
                  </div>
                  Projects
                </NavLink>
                <NavLink className='nav-link' to={`${url}/study`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-folder-plus'></i>
                  </div>
                  Study Items
                </NavLink>
                <NavLink className='nav-link' to={`${url}/interviews`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-folder-plus'></i>
                  </div>
                  Interviews
                </NavLink>
              </div>
            </div>
            <div className='sb-sidenav-footer'>
              <div className='small'>Logged in as:</div>
              Your name
            </div>
          </nav>
        </div>
        <div id='layoutSidenav_content'>
          <main>
            <div className='container-fluid'>{props.children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default AdminMenu
