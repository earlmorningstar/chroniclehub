// import { NavLink} from "react-router-dom";
import './MainNavigation.css';


function MainNavigation({title, children}) {
  return (
    <nav className="navbar">
      <p>{title}</p>

      <div className="navDiv">
        <span>
          {children}
        </span>
      </div>
    </nav>
  );
}

export default MainNavigation;


// {/* <NavLink to="/">Home</NavLink>
// <NavLink to="/products" end>
//             Products
//           </NavLink> */}