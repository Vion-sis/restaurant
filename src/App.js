import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from  "./Navbar/Navbar.js";
import Header from "./Header/Header.js";
import SubHeading from "./SubHeading/SubHeading.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <SubHeading/>
    </div>
  );
}

export default App;
