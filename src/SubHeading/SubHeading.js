import React from "react";
import "./SubHeading.css";

import mark from "../images/mark.svg";

function SubHeading(props) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p className="p__hook">{props.title}</p>
      <img  src={mark} alt="Liceria mark" />
    </div>
  );
}

export default SubHeading;
