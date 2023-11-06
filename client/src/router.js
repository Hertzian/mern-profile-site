import { createBrowserRouter } from "react-router-dom"
import HomePage from './pages/front/HomePage'
import ErrorPage from './pages/ErrorPage'
import ProjectPage from './pages/front/ProjectPage'
import Login from './pages/back/Login'
import ProfileSection from './pages/back/ProfileSection'
import PlacesSection from './pages/back/PlacesSection'
import SkillsSection from './pages/back/SkillsSection'
import ProjectsSection from './pages/back/ProjectsSection'
import AdminPage from "./pages/back/AdminPage"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/project/:projectId',
    element: <ProjectPage />
  },
  {
    path: '/mamalon/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <AdminPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'profile',
        element: <ProfileSection />
      },
      {
        path: 'places',
        element: <PlacesSection />
      },
      {
        path: 'skills',
        element: <SkillsSection />
      },
      {
        path: 'projects',
        element: <ProjectsSection />
      },
    ]
  }
])

