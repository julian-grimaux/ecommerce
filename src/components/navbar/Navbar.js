import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import SideBarData from './SideBarData';
import './navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GetProducts from '../../services/Promise';




const useStyles = makeStyles({
  appbar: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    height: '100px'
  },
});


export default function MenuAppBar() {
  const classes = useStyles();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className={classes.appbar} sx={{ mb: 3 }}>
        <Toolbar>
          <div className='navbar'>
            <Link to='#' className='link'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1, mt: 3, }}
                onClick={showSidebar}
                className='menuBar'
              >
                <MenuIcon />
              </IconButton>
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars link'>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, mt: 3, }}
                    onClick={showSidebar}
                    className='menu-bars'
                  >
                    <MenuIcon />
                  </IconButton>
                </Link>
              </li>
              {SideBarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={showSidebar}>
                    <Link to={item.path}>
                      {item.icon}
                      <span  onClick={showSidebar}>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Typography variant="h3" component="h3" sx={{ mr: 2, mt: 3, flexGrow: 1 }} className={classes.titleNav}>
            Cyrex Collection
          </Typography>
          <ShoppingCartIcon className='iconCart' />
        </Toolbar>
      </AppBar>
    </Box>
  );
}



