import React from 'react';
// import WeekDay from '../atoms/WeekDay';
import WeatherIcon from '../atoms/WeatherIcon';
import moment from 'moment';

const DailyWeather = ({day, icon, maxTemp, minTemp, ...props}) => {
    return (
        <div>
            <h3>{moment(day).format('dddd')}</h3>
            {/* <WeekDay day={day} /> */}
            <WeatherIcon icon={icon}/>
            <p>{maxTemp}</p>
            <p>{minTemp}</p>
        </div>
    )
}

export default DailyWeather;
