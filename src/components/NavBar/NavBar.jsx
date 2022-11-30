import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../Button/ToggleButton/ToggleButton";
import { SearchBar } from "../SearchBar/SearchBar";
import "./navBar.modules.css";

const navLinks = [
  { route: "All", path: "all" },
  { route: "Unknown", path: "unknown" },
  { route: "Female", path: "female" },
  { route: "Male", path: "male" },
  { route: "Genderless", path: "unknown" },
];

export const Navbar = ({onSubmit}) => {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  const routes = navLinks.map((route, i) => (
    <NavLink
      className="navbar-links"
      key={i}
      to={route.path}
      onClick={handleClick}
    >
      {route.route}
    </NavLink>
  ));

  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <SearchBar onSubmit={onSubmit} />
          <ToggleButton click={handleClick} />
          <div className="navlink-container">{routes}</div>
        </div>
      </nav>
      <div className={`${sidebar ? "sideBar" : "sideBarclose"}`}>{routes}</div>
    </>
  );
};
