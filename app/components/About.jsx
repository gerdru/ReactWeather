import React from 'react';

var About = (props) => {
      return (
        <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React!</p>
        <p>Here are some of the tools I used:</p>
        <ol>
          <li><a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.</li>
          <li><a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.</li>
        </ol>
        </div>
    )
};

export default About;
