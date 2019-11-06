import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import Forecast from '../components/organisms/Forecast';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import '../components/atoms/TextLink.css';


const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
    return (
      <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
        <Forecast forecast={forecast} />
        <p>Don't like the weather?</p>
        <Link to="/complain">
          <TextLink className="TextLink">Complain to the weather person!</TextLink>
        </Link>
      </PageTemplate>
    );
  };


export default WeatherPage;
