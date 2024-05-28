import { NavLink } from "react-router-dom";
import "./AllStyles.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <p>Unleash Your Curiosity</p>
          <span>Discover the World of Blogging</span>
          <button className="btn-style">
            <NavLink className="explore-navlink" to="/products">
              Explore
            </NavLink>
          </button>
        </div>
        <div className="hero-vid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          inventore odio nobis suscipit ratione deleniti nam error aut expedita
          ut!
        </div>
      </div>
    </>
  );
}

export default HeroSection;