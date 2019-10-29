import React from 'react';
import WeekDay from '../atoms/WeekDay';
import WeatherIcon from '../atoms/WeatherIcon';

const DailyWeather = ({day, icon, maxTemp, minTemp, ...props}) => {
    return (
        <div>
            <WeekDay day={day} />
            <WeatherIcon icon={icon}/>
            <p>{maxTemp}</p>
            <p>{minTemp}</p>
        </div>
    )
}

export default DailyWeather;
