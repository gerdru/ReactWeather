import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return(
    <div>It's {temp} degrees in {location}</div>
  )
};

export default WeatherMessage;
