import React from "react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.modules.css";

const navLinks = [
  { route: "All", path: "/allCharacters" },
  { route: "Unknown", path: "/unknownCharacters" },
  { route: "Female", path: "/femaleCharacters" },
  { route: "Male", path: "/maleCharacters" },
  { route: "Genderless", path: "/genderlessCharacters" },
];

const routes = navLinks.map((route, i) => (
  <NavLink className="navbar-links" key={i} to={route.path}>
    {route.route}
  </NavLink>
));

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <SearchBar />
        <div className="toggle-btn">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <div>
          <ul>
            <li>{routes}</li>
          </ul>
        </div>
      </nav>
    </>
  );
};
