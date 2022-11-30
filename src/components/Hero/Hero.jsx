import Cover from "../../assets/cover.png";
import "./Hero.modules.css";

export const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={Cover} />
    </div>
  );
};
