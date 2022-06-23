import React, { useState } from "react";
import "../style/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <a href="#" className="menu-bar">
          <MenuIcon fontSize="large" onClick={showSidebar} />
        </a>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a href="#" className="menu-bar">
              <CloseIcon fontSize="large" />
            </a>
          </li>

          <li className="nav-text">Home</li>
          <li className="nav-text">Discography</li>
          <li className="nav-text">Tours</li>
          <li className="nav-text">Shop</li>

          <li className="nav-text">About</li>

          <li className="nav-text">Login</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
