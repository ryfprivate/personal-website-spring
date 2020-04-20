import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import "./Deck.css";

const Deck = () => {
  return (
    <div className="deck__container">
      <div className="deck__item">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Deck;
