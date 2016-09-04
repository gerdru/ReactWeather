import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="text-center">It's {temp} degrees in {location}</h3>
  )
};

export default WeatherMessage;
