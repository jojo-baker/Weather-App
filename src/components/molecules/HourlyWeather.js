import React from 'react';
import HourlyWeatherItem from './HourlyWeatherItem';
import moment from 'moment';
import './HourlyWeather.css';

const HourlyWeather = ({ list, ...props }) => {
    return (
      <div className="HourlyWeather">
        <div className="HWList">
          <ul>
            {list.map(item => (
              <HourlyWeatherItem
                key={item.dt}
                time={moment(item.dt_txt).format('ha')}
                icon={item.weather[0].icon}
                maxTemp={`${parseInt(item.main.temp_max)}º`}
              />
            ))}
          </ul>
          </div>
      </div>
    );
  };

export default HourlyWeather;
