import React from 'react';
import WeekDay from '../atoms/WeekDay';
import WeatherIcon from '../atoms/WeatherIcon';
import DisplayTemp from '../atoms/DisplayTemp';

const DayWeather = () => {
    return (
        <div>
            <WeekDay />
            <WeatherIcon />
            <DisplayTemp />
        </div>
    )
}

export default DayWeather;
