import React from "react";
import "./style.css";

function Img(props) {
  return (
    <div
      className="img"
      onClick={() => props.onClick(props.id)}
      style={{ backgroundImage: "url(" + props.img + ")" }}
    ></div>
  );
}

export default Img;
