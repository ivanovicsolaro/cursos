import React from "react";
import Location from "../components/Location";
import WeaterData from "../components/WeaterData";

const WeaterLocation = () => (
  <div>
    <h3>
      <Location city="Paraná"></Location>
    </h3>
    <WeaterData />
  </div>
);

export default WeaterLocation;
