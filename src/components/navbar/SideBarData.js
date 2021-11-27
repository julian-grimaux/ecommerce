import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MyLocationIcon from '@mui/icons-material/MyLocation';

 const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon:<HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon:<MyLocationIcon/>,
    cName: 'nav-text'
  },
];

export default SidebarData


