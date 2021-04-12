export const menuItems = [
  { label: 'Home', refe: '#home' },
  { label: 'My experience', refe: '#places' },
  { label: 'About', refe: '#about' },
  { label: 'Skills', refe: '#skills' },
  { label: 'Projects', refe: '#projects' },
  { label: 'Contact', refe: '#contact' },
  { label: 'Admin', refe: 'admin' },
  { label: 'Profile', refe: 'admin/profile' }
]

export const adminMenu = [
  { label: 'Profile', component: 'AdminProfile' },
  { label: 'Places', component: 'AdminPlaces' },
  { label: 'Skills', component: 'AdminSkills' },
  { label: 'Projects', component: 'AdminProjects' }
]

export const routes = [{ path: '/', component: 'HomePage' }]
