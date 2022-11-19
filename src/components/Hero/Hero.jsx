import Cover from "../../assets/cover.png";
import BackGround from "../../assets/movilHero.png";
import { useState, useEffect } from "react";
import "./Hero.modules.css";
import { SearchBar } from "../SearchBar/SearchBar";

export const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={Cover} />
    </div>
  );
};
