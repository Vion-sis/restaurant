import React from "react";
import SubHeading from "../SubHeading/SubHeading.js";
import "./Header.css";

import SteakSet from "../images/SteakSet.jpeg";

function Header() {
  return (
    <div className="app__header app__wrapper section__padding  " id="home">
      <div className="container">
        <div className="row">
          <div className="app__wrapper_info col-6">
            <SubHeading title="Chase the new flavor" />
            <h1 className="app__header-h1">The Key to fine Dining</h1>
            <p>
              Come dine with the best in town. We searve meals from across the{" "}
              <br />
              world with diverse-high trained chefs. Our restaurant has
              consistently <br />
              ranked no.1 worldwide.This is where art meets best services.
            </p>
            <button className="Explore-button">Explore More</button>
          </div>
          <div className="app__wrapper col-6">
            <img
              className="img-fluid rounded"
              src={SteakSet}
              alt="By Iman Zaker from Unsplash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
