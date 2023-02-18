import React from "react";
import "./SubHeading.css";



function SubHeading(props) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p className="p__hook">{props.title}</p>
      <hr/>
    </div>
  );
}

export default SubHeading;
