import React from "react";
import "./Card.modules.css";

export const Card = ({ character }) => {
  const { name, image,location,origin } = character;
  return (
    <div className="card">
      <img src={image} className="img-character" alt="Charcacter-img" />
      <div>
        <p>Alive-Human</p>
        <p>{name}</p>
        <h6>Last Known location</h6>
        <p>{location.name}</p>
        <h6>First en in:</h6>
        <p>{origin.name} </p>
      </div>
    </div>
  );
};
