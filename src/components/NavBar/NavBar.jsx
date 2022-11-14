import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.modules.css";

const Navitems = [
  { route: "All", path: "/allCharacters" },
  { route: "Unknown", path: "/unknownCharacters" },
  { route: "Female", path: "/femaleCharacters" },
  { route: "Male", path: "/maleCharacters" },
  { route: "Genderless", path: "/genderlessCharacters" },
];

export const Navbar = () => {
  return (
    <>
      <nav className="NavBar">
        {Navitems.map((el) => (
          <NavLink className="Links" to={el.path}>{el.route}</NavLink>
        ))}
      </nav>
    </>
  );
};
