import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = ({ city, temperature, ...props }) => {
  return (
    <div>
      <CurrentWeather
        city={city}
        temperature={temperature}
        // ChangeButton={changeCity}
      />
      {props.children}
    </div>
  )
}

export default PageTemplate;