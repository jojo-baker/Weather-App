import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyUpdate = ({icon, temperature, time, ...props}) => {
    return (
        <>
        <ul>
           <li>{time}</li>
           <li><WeatherIcon icon={icon}/></li>
           <li>{temperature}</li>
        </ul>
        </>
    )
}

export default HourlyUpdate;
