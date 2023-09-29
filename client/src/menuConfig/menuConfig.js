export const frontMenu = [
  { label: 'Home', refe: '/#home' },
  { label: 'My experience', refe: '/#places' },
  { label: 'About', refe: '/#about' },
  { label: 'Skills', refe: '/#skills' },
  { label: 'Projects', refe: '/#projects' },
  { label: 'Contact', refe: '/#contact' },
  { label: 'Admin', refe: '/mamalon/login' },

  { label: '- profile', refe: '/admin/profile' },
  { label: '- places', refe: '/admin/places' },
  { label: '- skills', refe: '/admin/skills' },
  { label: '- projects', refe: '/admin/projects' },
]

export const adminMenu = [
  { label: 'Profile', icon: 'fa fa-user', route: '/admin/profile' },
  { label: 'Places', icon: 'fa fa-chart-area', route: '/admin/places' },
  { label: 'Skills', icon: 'fa fa-table', route: '/admin/skills' },
  { label: 'Projects', icon: 'fa fa-folder-plus', route: '/admin/projects' },
]

export const image =
  'https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg'

export const projects = [
  {
    name: 'Estrateva site',
    url: 'https://estrateva-node.herokuapp.com',
    github: 'https://github/Hertzian/estratevaLanding-node',
    show: true
  },
  {
    name: 'Estrateva site',
    url: 'https://estrateva-node.herokuapp.com',
    github: 'https://github/Hertzian/estratevaLanding-node',
    show: false
  },
  {
    name: 'Estrateva site',
    url: 'https://estrateva-node.herokuapp.com',
    github: 'https://github/Hertzian/estratevaLanding-node',
    show: true
  }
]

export const routes = [{ path: '/', component: 'HomePage' }]