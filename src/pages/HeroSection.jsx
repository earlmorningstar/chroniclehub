import { NavLink } from "react-router-dom";
import "./AllStyles.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p>Unleash Your Curiosity</p>
        <span>Discover the World of Blogging</span>
          <NavLink className="explore-navlink" to="/products">
        <button className="btn-style">
            Explore
        </button>
          </NavLink>
      </div>
      <div className="hero-text-ii">
        <p>Welcome to ChronicleHub!</p>
        <span>
          Stay informed with the latest headlines and in-depth stories from
          around the globe. At ChronicleHub, we source news from "newsapi.org"
          to bring you accurate and up-to-date information.
        </span>
        <span>
          Explore articles from over 150,000 sources, complete with author
          details, publication dates, images, and direct links to the original
          content. Dive into our extensive archives and stay connected with the
          world.
        </span>
        <span>
          Thank you for choosing ChronicleHub as your trusted news companion!
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
