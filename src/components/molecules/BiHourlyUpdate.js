import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import TextBiHour from '../atoms/TextBiHour';
import DisplayTemp from '../atoms/DisplayTemp';

const BiHourlyUpdate = () => {
    return (
        <ul>
           <li><TextBiHour /></li>
           <li><WeatherIcon /></li>
           <li><DisplayTemp /></li>
        </ul>
    )
}

export default BiHourlyUpdate;
