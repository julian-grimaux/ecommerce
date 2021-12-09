import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from "../Icons/Icons";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import "./navbar.css"

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [showLinks, setShowLinks] = useState(false);

  return (
    <Fragment>
      <div className="navbar">
        <div className="leftSide">
          <img src={"https://imgur.com/JONKuKS.png"} className="logo"></img>
        </div>
        <div className="rightSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link to="/"><span>Inicio</span></Link>
            <span
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className="spanProducts"
            >
              Productos <strong className="arrowDown">▼</strong>
            </span>
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className="button"
            onClick={() => setShowLinks(!showLinks)}
          >
            {""}
            <MenuIcon className="iconButton" />
          </IconButton>
          <Link to="/cart" className="cartWidget"><CartWidget /></Link>
          <div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} className="menuItems"><Link to="/products">Ver todos</Link></MenuItem>
              <MenuItem onClick={handleClose} className="menuItems"><Link to="/category/rifles">Rifles</Link></MenuItem>
              <MenuItem onClick={handleClose} className="menuItems"><Link to="/category/pistols">Pistolas</Link></MenuItem>
              <MenuItem onClick={handleClose} className="menuItems"><Link to="/category/smg">SMG</Link></MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
