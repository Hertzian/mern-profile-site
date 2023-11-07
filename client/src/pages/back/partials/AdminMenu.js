import Footer from './AdminFooter'
import { adminMenu } from '../../../config/menuConfig'
import AdminSideBarItem from './AdminSideBarItem'
import { siteName } from '../../../config/menuConfig'

const AdminMenu = ({ children, name }) => {
  const sideItems = adminMenu.map((item, idx) => (
    <AdminSideBarItem
      key={idx}
      label={item.label}
      icon={item.icon}
      route={item.route}
    />
  ))

  return (
    <>
      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <nav className='sb-sidenav accordion sb-sidenav-dark' id='sidenavAccordion' >
            <div className='sb-sidenav-menu'>
              <div className='nav'>
                <div className='sb-sidenav-menu-heading'>Welcome</div>

                {sideItems}

              </div>
            </div>
            <div className='sb-sidenav-footer'>
              <div className='small'>Logged in as:</div>
              {name}
            </div>
          </nav>
        </div>

        <div id='layoutSidenav_content'>
          <main>
            <div className='container-fluid'>

              {children}

            </div>
          </main>
          <Footer siteName={siteName} />
        </div>

      </div>
    </>
  )
}

export default AdminMenu
