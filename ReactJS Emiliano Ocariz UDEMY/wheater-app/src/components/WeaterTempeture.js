import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";

import { SUN, CLOUD, RAIN, CLOUDY, SNOW, WINDY } from "./../constans/weather";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

const getWheaterIcon = weaterState => {
  const icon = icons[weaterState];
  if (!icon) return <WeatherIcons name="day-sunny" size="2x" />;
  else return <WeatherIcons name={icon} size="2x" />;
};

const WeaterTempeture = ({ temperature, weaterState }) => (
  <div>
    {getWheaterIcon(weaterState)}
    <span>{`${temperature} Cº`}</span>
  </div>
);

export default WeaterTempeture;
