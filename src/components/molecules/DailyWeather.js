import React from 'react';
import WeekDay from '../atoms/WeekDay';
import WeatherIcon from '../atoms/WeatherIcon';

const DailyWeather = ({day,icon, ...props}) => {
    return (
        <div>
            <WeekDay day={day} />
            <WeatherIcon icon={icon}/>
            <p>temp</p>
        </div>
    )
}

export default DailyWeather;
