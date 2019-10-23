import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import DayWeather from '../molecules/DayWeather';
import TimeSlider from '../organisms/TimeSlider';
import WeekForecast from '../organisms/WeekForecast';
import ComplaintLink from '../atoms/ComplaintLink';

const ForecastTemplate = () => {
    return (
        <div>
            <CurrentWeather />
            <DayWeather />
            <TimeSlider />
            <WeekForecast />
            <ComplaintLink />
        </div>
    )
}

export default ForecastTemplate;
