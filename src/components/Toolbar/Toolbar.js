import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
      <img src='navbar/logo.png' alt='nores'/>
      </div>
      <div className="spacer" />
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Login </a>
          </li>
          <li>
            <a href="/">Login </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
