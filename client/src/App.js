import SiteRoutes from './routing/SiteRoutes'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <SiteRoutes />
    </UserProvider>
  )
}

export default App
