export const menuItems = [
  { label: 'Home', refe: '#home' },
  { label: 'My experience', refe: '#places' },
  { label: 'About', refe: '#about' },
  { label: 'Skills', refe: '#skills' },
  { label: 'Projects', refe: '#projects' },
  { label: 'Contact', refe: '#contact' },
  { label: 'Admin', refe: 'admin/profile' }
]

export const adminMenu = [
  { label: 'Profile', component: 'AdminProfile' },
  { label: 'Places', component: 'AdminPlaces' },
  { label: 'Skills', component: 'AdminSkills' },
  { label: 'Projects', component: 'AdminProjects' }
]

export const image =
  'https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg'

export const places = [
  { company: 'Dynamics', job: 'FullStack developer', year: '2019', show: true },
  {
    company: 'Dynamics',
    job: 'FullStack developer',
    year: '2019',
    show: false
  },
  { company: 'Dynamics', job: 'FullStack developer', year: '2019', show: true }
]

export const skills = [
  { name: 'English', value: '90', show: true },
  { name: 'English', value: '90', show: false },
  { name: 'English', value: '90', show: true }
]

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
