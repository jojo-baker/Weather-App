import React from 'react';
import DailyWeather from '../molecules/DailyWeather';
import TimeSlider from './TimeSlider'

const WeekForecast = ({day, icon, maxTemp, minTemp, time, temperature, ...props}) => {
    return (
        <div>
            <h3>Today:</h3>
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
            <TimeSlider time={time} icon={icon} temperature={temperature}/>
            <h3>Upcoming:</h3>
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp}/>
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
            <DailyWeather day={day} icon={icon} maxTemp={maxTemp} minTemp={minTemp} />
        </div>
    )
}

export default WeekForecast;
