import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front"></img>
        <img
          className="back"
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="card-front"
        ></img>
      </div>
    </div>
  );
};

export default SingleCard;
