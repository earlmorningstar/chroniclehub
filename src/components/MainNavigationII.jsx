import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigationII() {
  return (
    <nav className="navbar-ii">
      <span>
        <NavLink to="/headlines">Headlines</NavLink>
      </span>
      <span>
        <NavLink to="/products" end>
          Others
        </NavLink>
      </span>
    </nav>
  );
}

export default MainNavigationII;
