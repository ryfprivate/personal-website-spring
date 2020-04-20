import React from "react";
import { animated, interpolate } from "react-spring";

import "./Card.css";

const Card = ({ index, title, bind, values: { rot, scale, trans } }) => {
  return (
    <animated.div
      {...bind(index)}
      className="deck__item"
      style={{ transform: interpolate([rot, scale], trans) }}
    >
      <h3>{title}</h3>
    </animated.div>
  );
};

export default Card;
