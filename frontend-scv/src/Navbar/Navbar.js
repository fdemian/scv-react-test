import React, { useState } from 'react';
import { Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ mobile, blogName }) => {

  const [drawerVisible, setDrawerVisible] = useState(false);
  const closeDrawer = () => setDrawerVisible(false);
  const openDrawer = () => setDrawerVisible(true);

  if(!mobile)
  return(
  <Menu
      mode="horizontal"
      key="parent.menu.not.logged"
      role="menu"
      aria-label="Navbar"
      className="desktop-menu"
    >
      <span className="logo-item-desktop" key="logo-item-desktop" role="menuitem">
        <Link to="/" className="topnav header-logo">
          <h1>SCV Test</h1>
        </Link>
      </span>
      {/*
      <span className="login-items"  role="menuitem">
        <Link to="/login">
          <span className="login-link-text">Login &nbsp;</span>
          <FontAwesomeIcon icon={signIn} size="2x" />
        </Link>
        <Link to="/register">
          <span className="register-link-text">Register &nbsp;</span>
          <FontAwesomeIcon icon={signUp} size="2x" />
        </Link>
      </span>*/}
  </Menu>
  );


  return (
  <>
    <Drawer
      visible={drawerVisible}
      placement="right"
      onClose={closeDrawer}
      title={null}
    >
      <Link to="/" className="topnav header-logo">
        <h1>Pagina principal</h1>
      </Link>
    </Drawer>
    <Menu
        mode="horizontal"
        key="parent.menu.not.logged"
        role="menu"
        aria-label="Navbar"
      >
        <Link to="/" className="topnav header-logo">
          <h1>SCV Test</h1>
        </Link>
        <span onClick={openDrawer} className="drawer-button">
          <FontAwesomeIcon
              icon={faBars}
              size="lg"
              color="black"
           />
         </span>
    </Menu>
  </>
  );

}

export default Navbar;
