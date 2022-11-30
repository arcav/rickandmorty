import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SearchBar.modules.css";

export const SearchBar = ({ onSubmit }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(filter);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      onSubmit(filter)
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={filter}
          onKeyPress={handleKeyPress}
        />
        <NavLink to="filterCharacters">search</NavLink>
      </form>
    </div>
  );
};
