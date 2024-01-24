import { FaUserAlt, FaChartArea, FaTable, FaFolderPlus } from "react-icons/fa"

export const siteName = 'eduardoaguilar.com'

export const frontMenu = [
  { label: 'Home', refe: '/#home' },
  { label: 'My experience', refe: '/#places' },
  { label: 'Skills', refe: '/#skills' },
  { label: 'Projects', refe: '/#projects' },
  { label: 'About', refe: '/#about' },
  { label: 'Contact', refe: '/#contact' },
  { label: 'Admin', refe: '/mamalon/login' },
]

export const adminMenu = [
  { label: 'Profile', icon: <FaUserAlt />, route: '/admin/profile' },
  { label: 'Places', icon: <FaChartArea />, route: '/admin/places' },
  { label: 'Skills', icon: <FaTable />, route: '/admin/skills' },
  { label: 'Projects', icon: <FaFolderPlus />, route: '/admin/projects' },
]

export const image =
  'https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg'
