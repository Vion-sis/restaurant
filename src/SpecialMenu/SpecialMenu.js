import React from "react";

import "./SpecialMenu.css";

import SubHeading from "../SubHeading/SubHeading";
import menu from "../images/menu.png";

function SpecialMenu(props) {
  const wineMapping = [
    { name: "Draft Beer", price: "500¥" },
    { name: "Tusker Beer", price: "750¥" },
    { name: "Asahi Beer", price: "650¥" },
    { name: "Carisberg", price: "600¥" },
    { name: "Savanna Dry", price: "600¥" },
    { name: "Japanese Sake", price: "900¥ " },
    { name: "Glass Wine", price: "500¥" },
    { name: "Highball", price: "450¥" },
  ];

  const softDrinkMappping = [
    { name: "00long tea", price: "300¥" },
    { name: "Grape juice", price: "300¥" },
    { name: "coconut juice", price: "300¥" },
    { name: "Guava Juice", price: "300¥" },
    { name: "Mango juice", price: "300¥" },
    { name: "coffee", price: "350¥" },
    { name: "Tea", price: "350¥" },
    { name: "Chai", price: "400¥" },
  ];
  return (
    <div>
      <div className="heading ">
        <SubHeading title="Menu that fits your palatte" />
        <h1>Drink's Special</h1>
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="munu-image">
          <img src={menu} alt="menu picture" />
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
