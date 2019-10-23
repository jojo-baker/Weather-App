import React from 'react';
import DailyWeather from '../molecules/DailyWeather';
import TimeSlider from './TimeSlider'

const WeekForecast = ({day,icon, ...props}) => {
    return (
        <div>
            <h3>Today:</h3>
            <DailyWeather day={day} icon={icon} />
            <TimeSlider />
            <h3>Upcoming:</h3>
            <DailyWeather day={day} icon={icon} />
            <DailyWeather day={day} icon={icon} />
            <DailyWeather day={day} icon={icon} />
            <DailyWeather day={day} icon={icon} />
            <DailyWeather day={day} icon={icon} />
            <DailyWeather day={day} icon={icon} />
        </div>
    )
}

export default WeekForecast;
