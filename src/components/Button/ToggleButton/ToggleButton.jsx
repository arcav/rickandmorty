import React from "react";
import "./ToggleButton.modules.css";

const ToggleButton = ({ click }) => {
  return (
    <div className="toggle-btn" onClick={click}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </div>
  );
};

export default ToggleButton;
