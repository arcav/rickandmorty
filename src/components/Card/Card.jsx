import React from "react";
import "./Card.modules.css";

export const Card = ({ character }) => {
  const { name, image, location, origin } = character;
  return (
    <div className="card-container">
      <img src={image} className="img-character" alt="Charcacter-img" />
      <div className="card">
        <div className="card-content">
          <h5>Alive-Human</h5>
          <h5>{name}</h5>
          <h5>Last Known location</h5>
          <h5>{location.name}</h5>
          <h5>First en in:</h5>          
          <h5>{origin.name} </h5>
        </div>
      </div>
    </div>
  );
};
