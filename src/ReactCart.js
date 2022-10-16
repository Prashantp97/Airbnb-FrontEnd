import React from "react";
import "./ReactCard.css";

export default function ReactCart({ src, title, description, price }) {
  return (
    <>
      <div className="maincard">
        <div className="card">
          <img src={src} alt="" />
          <div className="card__info">
            <h2 className="cardTitle">{title}</h2>
            <h4 style={{ fontSize: "20px" }}>{description}</h4>
            <h3 style={{ textAlign: "center" }}>{price}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
