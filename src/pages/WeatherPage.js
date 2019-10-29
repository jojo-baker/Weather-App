import React, { Fragment } from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import DailyWeather from '../components/molecules/DailyWeather';
import WeekForecast from '../components/organisms/WeekForecast';
import ComplaintLink from '../components/atoms/ComplaintLink';
import { chunkify } from '../utils';


const WeatherPage = ({city, icon, temperature, forecast, ...props}) => {
      // Take forecast and split into equal chunks for each day.
    const chunkedForecast = chunkify(forecast, forecast.length / 1);
    
      // Get highest temp from forecast chunk
    const getMaxTemp = array =>
         array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
// Get lowest temp from forecast chunk
    const getMinTemp = array =>
         array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));
    
    
    
    return (
        <div>
            <PageTemplate city={city} temperature={temperature} />
            {chunkedForecast.map((day, i) => (
                <Fragment key={i}>
                    <DailyWeather 
                    date={day[0].dt} 
                    icon={day[0].weather[0].icon}
                    maxTemp={getMaxTemp(day).main.temp}
                    minTemp={getMinTemp(day).main.temp}
                    />
                </Fragment>

            ))};
            {chunkedForecast.map((day, i) => (
                <Fragment key={i}>
                <WeekForecast
                time='6am'
                temperature={temperature}
                date={day[0].dt} 
                icon={day[0].weather[0].icon}
                maxTemp={getMaxTemp(day).main.temp}
                minTemp={getMinTemp(day).main.temp}
                />
                </Fragment>
            ))
            };
            <ComplaintLink />
        </div>
    )
}


export default WeatherPage;
