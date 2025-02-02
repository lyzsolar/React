import React from 'react';

const Card = ({ image, title, text }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
