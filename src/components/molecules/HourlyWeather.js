import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment';
import './HourlyWeather.css';

const HourlyWeather = ({ list, ...props }) => {
    return (
      <div className="HourlyWeather">
        <ul className="HWList">
          {list.map(item => (
            <HourlyWeatherItem
              key={item.dt}
              time={moment(item.dt_txt).format('ha')}
              // time={item.dt}
              icon={item.weather[0].icon}
              // icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              maxTemp={`${parseInt(item.main.temp_max)} º`}
            />
          ))}
        </ul>
      </div>
    );
  };

export default HourlyWeather;
