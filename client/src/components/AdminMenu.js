import { useRouteMatch, Link } from 'react-router-dom'
import Footer from './AdminFooter'

const AdminMenu = (props) => {
  const { url } = useRouteMatch()

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
                <Link className='nav-link' to={`${url}/profile`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Profile
                </Link>
                <Link className='nav-link' to={`${url}/places`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Places
                </Link>
                <Link className='nav-link' to={`${url}/skills`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Skills
                </Link>
                <Link className='nav-link' to={`${url}/projects`}>
                  <div className='sb-nav-link-icon'>
                    <i className='fas fa-chart-area'></i>
                  </div>
                  Projects
                </Link>
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