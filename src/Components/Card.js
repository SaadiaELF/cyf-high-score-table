import React from "react";
import Score from "./Score";

const Card = (props, key) => {
  const sortedScores = props.scores.sort((a, b) => {
    return b.s - a.s;
  });

  return (
    <div className="card" key={key}>
      <h2 className="card__title">HighScores : {props.country}</h2>
      {sortedScores.map((item, index) => {
        return <Score key={index} name={item.n} score={item.s} />;
      })}
    </div>
  );
};

export default Card;
