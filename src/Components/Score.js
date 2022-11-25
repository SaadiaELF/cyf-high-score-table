import React from "react";

const Score = (props, key) => {
  return (
    <div className="card__item" key={key}>
      <div className="card__item__name">{props.name}</div>
      <div className="card__item__score">{props.score}</div>
    </div>
  );
};

export default Score;
