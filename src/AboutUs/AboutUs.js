import React from "react";

import "./AboutUs.css";
import plate from "../images/plate.png";
import mark from "../images/mark.svg";
import knife from "../images/knife.png";

const AboutUs = () => {
  return (
    <div className="app__aboutus " id="about">
      <div className="app__aboutus-overlay d-flex justify-content-center">
        <img src={plate} alt="Liceria Kitchen Watermake" />
      </div>
      <div className="about__us-content container d-flex justify-content-between">
        <div className="about__us-content-aboutus">
          <h1>About Us</h1>
          <img src={mark} alt="Liceria mark" />

          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et
          </p>
          <button className="Explore-button">Learn more</button>
        </div>
        <div className="knife">
          <img src={knife} alt="kitchen knife" />
        </div>
        <div className="about__us-content-ourhistory ">
          <h1>Our History</h1>
          <img src={mark} alt="Liceria mark" />

          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et
          </p>
          <button className="Explore-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
