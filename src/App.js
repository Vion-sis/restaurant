import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from  "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import AboutUs from "./AboutUs/AboutUs.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;
