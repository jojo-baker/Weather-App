import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';

const DailyWeather = ({day, icon,list, maxTemp, minTemp, ...props}) => {
    return (
        <div>
            <h3>{moment(day).format('dddd')}</h3>
            <WeatherIcon icon={icon}/>
            <p>{maxTemp}</p>
            <p>{minTemp}</p>
            <HourlyWeather list={list} />
        </div>
    )
}

export default DailyWeather;
