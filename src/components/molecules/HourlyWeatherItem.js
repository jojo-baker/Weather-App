import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import './HourlyWeatherItem.css';

const HourlyWeatherItem = ({icon, maxTemp, time, ...props}) => {
    return (
        <>
        <ul>
           <li class="hourlytime">{time}</li>
           <li class="hourlyicon"><WeatherIcon icon={icon}/></li>
           <li class="hourlytemp">{maxTemp}</li>
        </ul>
        </>
    )
}

export default HourlyWeatherItem;
