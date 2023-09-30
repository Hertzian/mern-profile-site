import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state'

import HomePage from './pages/front/HomePage'
import ProjectPage from './pages/front/ProjectPage'
import Login from './pages/back/Login'
import ProfileSection from './pages/back/ProfileSection'
import PlacesSection from './pages/back/PlacesSection'
import SkillsSection from './pages/back/SkillsSection'
import ProjectsSection from './pages/back/ProjectsSection'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project/:projectId' element={<ProjectPage />} />
          <Route path='/mamalon/login' element={<Login />} />

          <Route path='/admin/profile' element={<ProfileSection />} />
          <Route path='/admin/places' element={<PlacesSection />} />
          <Route path='/admin/skills' element={<SkillsSection />} />
          <Route path='/admin/projects' element={<ProjectsSection />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
