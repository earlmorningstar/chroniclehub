import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';
import { BiSearch } from "react-icons/bi";
import './AllStyles.css';

function RootLayout() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          
          <span><BiSearch size={20}/></span>
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
          
          <span onClick={toggleDropdown}>Search</span>
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
