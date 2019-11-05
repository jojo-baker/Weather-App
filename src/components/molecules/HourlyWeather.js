import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment';

const HourlyWeather = ({ list, ...props }) => {
    return (
      <ul>
        {list.map(item => (
          <HourlyWeatherItem
            key={item.dt}
            time={moment(item.dt_txt).format('ha')}
            // time={item.dt}
            icon={item.weather[0].icon}
            // icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            maxTemp={`${item.main.temp_max} º`}
          />
        ))}
      </ul>
    );
  };

export default HourlyWeather;
