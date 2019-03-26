import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <div>
    <h1>{destination}</h1>
    <img src={photo} alt={destination} />
    <p>{country}</p>
    <p>{distance}</p>
  </div>
);

export default Travel;