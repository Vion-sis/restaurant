import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
    const [toggleMenu, setToggleMenu] =useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="App logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          {" "}
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="/">About</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="/">Menu</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="/">Awards</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/login" className="p__opensans">
          LogIn / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="/fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className= "overlay-content" onClick={()=> setToggleMenu(false)}/>

            <ul className="app__navbar-smallscreen-links">
                <li className="p__opensans">
                    {" "}
                    <a href="/">Home</a>
                </li>
                <li className="p__opensans">
                    {" "}
                    <a href="/">About</a>
                </li>
                <li className="p__opensans">
                    {" "}
                    <a href="/">Menu</a>
                </li>
                <li className="p__opensans">
                    {" "}
                    <a href="/">Awards</a>
                </li>
                <li className="p__opensans">
                    {" "}
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
        )}

        </div>
    </nav>
  );
}

export default Navbar;
