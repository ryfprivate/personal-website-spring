import React from "react";
import image from "../../images/silhouette.jpg";

function Loaded({ loaded }) {
  console.log(loaded);
  return (
    <div>
      {loaded ? (
        <div>
          <h1>Done Loading</h1>
          <img src={image}></img>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Loaded;
