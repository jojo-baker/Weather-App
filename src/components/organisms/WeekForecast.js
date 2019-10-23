import React from 'react';
import DayWeather from '../molecules/DayWeather';

const WeekForecast = () => {
    return (
        <div>
            <h3>Upcoming:</h3>
            <DayWeather />
            <DayWeather />
            <DayWeather />
            <DayWeather />
            <DayWeather />
            <DayWeather />
        </div>
    )
}

export default WeekForecast;
