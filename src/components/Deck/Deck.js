import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";

import Card from "../Card";
import "./Deck.css";

const cards = ["one", "two", "three", "four", "five"];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      className="deck"
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <Card title={cards[i]} values={{ rot, scale, trans }}></Card>
    </animated.div>
  ));
};

export default Deck;
