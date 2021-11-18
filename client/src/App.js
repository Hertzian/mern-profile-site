import SiteRoutes from './components/SiteRoutes'
import { UserProvider } from './context/UserContext'

function App() {
  //factura.com
  //vue
  //
  return (
    <UserProvider>
      <SiteRoutes />
    </UserProvider>
  )
}

export default App
