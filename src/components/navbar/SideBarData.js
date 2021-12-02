import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';


 const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon:<HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/products',
    icon:<MyLocationIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Rifle',
    path: `/category/rifles`,
    icon:<MyLocationIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Pistol',
    path: '/category/pistols',
    icon:<MyLocationIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'SMG',
    path: '/category/smg',
    icon:<MyLocationIcon/>,
    cName: 'nav-text'
  },
];

export default SidebarData


