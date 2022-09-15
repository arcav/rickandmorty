import Cover from "../../assets/cover.png";
import BackGround from "../../assets/movilHero.png";
import { useState, useEffect } from "react";

import "./Hero.modules.css";

export const Hero = () => {
  const [size, setSize] = useState();
  /*   console.log(size);
   */

  useEffect(() => {
    const width = window.innerWidth;
    console.log(width);
    setSize(width);
  }, []);

  return (
    <div className="hero">
    
        <img className="hero-img" src={BackGround} />
    
    </div>
  );
};
