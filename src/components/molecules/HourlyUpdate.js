import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';

const HourlyUpdate = ({icon, ...props}) => {
    return (
        <ul>
           <li>6am</li>
           <li><WeatherIcon icon={icon}/></li>
           <li>temp</li>
        </ul>
    )
}

export default HourlyUpdate;
