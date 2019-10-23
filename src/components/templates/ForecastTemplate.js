import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import DailyWeather from '../molecules/DailyWeather';
import WeekForecast from '../organisms/WeekForecast';
import ComplaintLink from '../atoms/ComplaintLink';

const ForecastTemplate = ({city, day, icon, ...props}) => {
    return (
        <div>
            <CurrentWeather city={city} />
            <DailyWeather day={day}/>
            <WeekForecast day={day} icon={icon}/>
            <ComplaintLink />
        </div>
    )
}

export default ForecastTemplate;
