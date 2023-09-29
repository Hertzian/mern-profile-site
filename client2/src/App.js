import SiteRoutes from './routing/SiteRoutes'
import { UserProvider } from './context/UserContext'

const App = () => {
  return (
    <UserProvider>
      <SiteRoutes />
    </UserProvider>
  )
}

export default App
