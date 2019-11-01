import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyWeatherItem = ({icon, maxTemp, time, ...props}) => {
    return (
        <>
        <ul>
           <li>{time}</li>
           <li><WeatherIcon icon={icon}/></li>
           <li>{maxTemp}</li>
        </ul>
        </>
    )
}

export default HourlyWeatherItem;
