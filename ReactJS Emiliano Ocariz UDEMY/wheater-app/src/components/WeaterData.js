import React from "react";
import WheaterExtraInfo from "./WeaterExtraInfo";
import WheaterTempeture from "./WeaterTempeture";
import { SUN, CLOUD, RAIN, CLOUDY } from "./../constans/weather";
const WeaterData = () => (
  <div>
    <WheaterTempeture temperature={20} weaterState={CLOUDY} />
    <WheaterExtraInfo humidity={80} wind={10} />
  </div>
);

export default WeaterData;
