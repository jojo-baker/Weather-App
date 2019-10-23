import React from 'react';
import ForecastTemplate from '../components/templates/ForecastTemplate';

const WeatherPage = () => {
    return (
        <div>
            <ForecastTemplate city="Perth" day="Wednesday" icon="Weather Icon" />
        </div>
    )
}

export default WeatherPage;
