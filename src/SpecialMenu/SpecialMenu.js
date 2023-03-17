import React from "react";

import "./SpecialMenu.css";

import SubHeading from "../SubHeading/SubHeading";
import menu from "../images/menu.png";

function SpecialMenu(props) {
  const wineMapping = [
    { name: "Draft Beer", price: "500¥", desc: "AU | Bottle" },
    { name: "Tusker Beer", price: "750¥", desc: "AU | Bottle" },
    { name: "Asahi Beer", price: "650¥", desc: "FR | 750ml" },
    { name: "Carisberg", price: "600¥", desc: "IE | 750ml" },
    { name: "Savanna Dry", price: "600¥", desc: "FR | 750ml" },
    { name: "Japanese Sake", price: "900¥ ", desc: "JP | 500ml" },
    { name: "Glass Wine", price: "500¥", desc: "CA | 750ml" },
    { name: "Highball", price: "450¥", desc: "JP | 750ml" },
  ];

  const softDrinkMappping = [
    { name: "00long tea", price: "300¥", desc: "JP  |  1cup" },
    { name: "Grape juice", price: "300¥", desc: "INDO  |  750ml" },
    { name: "coconut juice", price: "300¥", desc: "KE  |  750ml" },
    { name: "Guava Juice", price: "300¥", desc: "TZ  |  750ml" },
    { name: "Mango juice", price: "300¥", desc: "CH  |  750ml" },
    { name: "coffee", price: "350¥", desc: "IND  |  1cup" },
    { name: "Tea", price: "350¥", desc: "BR  |  1cup" },
    { name: "Chai", price: "400¥", desc: "LK  |  1cup" },
  ];
  return (
    <div className="special-menu">
      <div className="heading ">
        <SubHeading title="Menu that fits your palatte" />
        <h1>Drinks Special</h1>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="menu-items">
          <div className="menu-title">Wine & Beer</div>
          <div>
            {wineMapping.map(function (wine, index) {
              return (
                <div key={index}>
                  <p className="wine-menu">
                    <span className="menu-wine-name"> {wine.name}</span>{" "}
                    <div className="menu-dash" /> {wine.price}
                  </p>
                  <p className="menu-desc"> {wine.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="munu-image">
          <img src={menu} alt="menu " />
        </div>

        <div className="menu-items">
          <div className="menu-title">Soft Drinks</div>
          <div>
            {softDrinkMappping.map(function (drinks, index) {
              return (
                <div key={index}>
                  <p className="wine-menu">
                    <span className="menu-wine-name"> {drinks.name}</span>{" "}
                    <div className="menu-dash" /> {drinks.price}
                  </p>
                  <p className="menu-desc"> {drinks.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialMenu;
