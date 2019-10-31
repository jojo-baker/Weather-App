import React, { Fragment } from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import DailyWeather from '../components/molecules/DailyWeather';
import WeekForecast from '../components/organisms/WeekForecast';
import ComplaintLink from '../components/atoms/ComplaintLink';
import { chunkify } from '../utils';
import { Link } from 'react-router-dom';


const WeatherPage = ({city, icon, temperature, changeCity, forecast, ...props}) => {
      // Take forecast and split into equal chunks for each day.
      console.log('forecast', forecast);
    const chunkedForecast = chunkify(forecast, forecast.length / 5);
    console.log('chunked', chunkedForecast);
    
      // Get highest temp from forecast chunk
    const getMaxTemp = array =>
         array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
// Get lowest temp from forecast chunk
    const getMinTemp = array =>
         array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));
    
    
    
    return (
        <div>
            <PageTemplate city={city} temperature={temperature} changeCity={changeCity}/>
            {chunkedForecast.map((day, i) => (
                <Fragment key={i}>
                    <WeekForecast
                    time='6am'
                    temperature={temperature}
                    day={day[0].dt} 
                    icon={day[0].weather[0].icon}
                    maxTemp={getMaxTemp(day).main.temp}
                    minTemp={getMinTemp(day).main.temp}
                    />
                </Fragment>

            ))};
            <Link to="/complain"><ComplaintLink /></Link>
        </div>
    )
}


export default WeatherPage;
