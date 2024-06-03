import React, { useState, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';
import ArticlesContext from "../store/ArticlesContext";
import SearchBar from './SearchBar';
import './AllStyles.css';

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { fetchArticles } = useContext(ArticlesContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleArticleSearch = (query) => {
    fetchArticles(query);
  };

  return (
    <>
      <MainNavigation title="ChronicleHub">
        <div className="nav-links">
          <NavLink to="/" className="root-nav" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/products" className="root-nav" activeClassName="active" end>
            Blog
          </NavLink>
          <NavLink to="/about" className="root-nav" activeClassName="active" end>
            About
          </NavLink>
          <SearchBar onSearch={handleArticleSearch} />
        </div>
        <div className="hamburger-menu" onClick={toggleDropdown}>
          {isDropdownOpen ? <RiCloseLargeFill size={26}/> : <RxHamburgerMenu size={26}/>}
        </div>
      </MainNavigation>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className='nav-link-dropDown'>
            <NavLink to="/" className="root-nav-dropDown" onClick={toggleDropdown}>
              Home
            </NavLink>
            <NavLink to="/products" className="root-nav-dropDown" onClick={toggleDropdown} end>
              Blog
            </NavLink>
            <NavLink to="/about" className="root-nav-dropDown" onClick={toggleDropdown} end>
              About
            </NavLink>
            <SearchBar className="root-nav-dropDown" onSearch={handleArticleSearch} />
          </div>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;



//SearchBar appears only when ProductsPage (Blog) is active.---


// import React, { useState, useContext } from 'react';
// import { Outlet, NavLink, useLocation } from 'react-router-dom';
// import MainNavigation from '../components/MainNavigation';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import { RiCloseLargeFill } from 'react-icons/ri';
// import ArticlesContext from "../store/ArticlesContext";
// import SearchBar from './SearchBar';
// import './AllStyles.css';

// function RootLayout() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { fetchArticles } = useContext(ArticlesContext);
//   const location = useLocation();

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleArticleSearch = (query) => {
//     fetchArticles(query);
//   };

//   const isProductsPage = location.pathname === '/products';

//   return (
//     <>
//       <MainNavigation title="ChronicleHub">
//         <div className="nav-links">
//           <NavLink to="/" className="root-nav" activeClassName="active">
//             Home
//           </NavLink>
//           <NavLink to="/products" className="root-nav" activeClassName="active" end>
//             Blog
//           </NavLink>
//           <NavLink to="/about" className="root-nav" activeClassName="active" end>
//             About
//           </NavLink>
//           {isProductsPage && <SearchBar onSearch={handleArticleSearch} />}
//         </div>
//         <div className="hamburger-menu" onClick={toggleDropdown}>
//           {isDropdownOpen ? <RiCloseLargeFill size={26}/> : <RxHamburgerMenu size={26}/>}
//         </div>
//       </MainNavigation>
//       {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <div className='nav-link-dropDown'>
//             <NavLink to="/" className="root-nav-dropDown" onClick={toggleDropdown}>
//               Home
//             </NavLink>
//             <NavLink to="/products" className="root-nav-dropDown" onClick={toggleDropdown} end>
//               Blog
//             </NavLink>
//             <NavLink to="/about" className="root-nav-dropDown" onClick={toggleDropdown} end>
//               About
//             </NavLink>
//             {isProductsPage && <SearchBar className="root-nav-dropDown" onSearch={handleArticleSearch} />}
//           </div>
//         </div>
//       )}
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// }

// export default RootLayout;