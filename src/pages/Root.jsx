import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { NavLink } from "react-router-dom";
import "./AllStyles.css";
// import MainNavigationII from "../components/MainNavigationII";

function RootLayout() {
  return (
    <>
      <MainNavigation title="ChronicleHub">
        <NavLink to="/" className="root-nav" activeClassName="active">Home</NavLink>
        <NavLink to="/products" className="root-nav" activeClassName="active" end>
          Blog
        </NavLink>
        <span>Search</span>
      </MainNavigation>
      {/* <MainNavigation title={undefined}>
        <NavLink to="/products" end>
          Headlines
        </NavLink>
        <NavLink to="/products" end>
          Products
        </NavLink>
      </MainNavigation> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
