import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AboutUs from "./AboutUs/AboutUs.js";
import SpecialMenu from "./SpecialMenu/SpecialMenu.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
