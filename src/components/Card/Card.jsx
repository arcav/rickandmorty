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
          <p>{name}</p>
          <h5>Last Known location</h5>
          <p>{location.name}</p>
          <h5>First en in:</h5>          
          <p>{origin.name} </p>
        </div>
      </div>
    </div>
  );
};
