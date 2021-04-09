import { menuItems } from '../dummy/dummy'
import AdminMenuItem from './AdminMenuItem'

const AdminMenu = () => {
  return (
    <>
      <ul>
        {menuItems.map((item, idx) => (
          <AdminMenuItem key={idx} name={item.label} />
        ))}
      </ul>
    </>
  )
}

export default AdminMenu
