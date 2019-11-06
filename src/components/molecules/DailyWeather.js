import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeather.css';

const DailyWeather = ({day, icon,list, maxTemp, minTemp, ...props}) => {
    return (
        <>
            <div class="DWblock">
                <h3 class="DWtitle">{moment(day).format('dddd')}</h3>
                    <div class="DWtempblock">
                        <div class="DWicon"><WeatherIcon icon={icon}/>&nbsp;</div>
                        <div class="DWmaxmin"><b>{maxTemp}</b>&nbsp;</div>
                        <div class="DWmaxmin">{minTemp}</div>
                    </div>
            </div>
            <HourlyWeather list={list} />
        </>
    )
}

export default DailyWeather;
