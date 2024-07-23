import React from "react";
import "./Card.css";

const Card = ({ image, name, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image-container">
        <img src={image} alt={name} className="card__image" />
      </div>
      <div className="card__content">
        <h4 className="card__name">{name}</h4>
        {description && (
          <p className="card__desc text-sm" style={
            { backgroundColor:"rgb(39 38 38)"}
          }>
            {description.split("").slice(0, 50).join("")}...
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
