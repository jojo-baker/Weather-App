import React, { Fragment } from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import Forecast from '../components/organisms/Forecast';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';


const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
    return (
      <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
        <Forecast forecast={forecast} />;
        <Link to="/complain">
          <TextLink>Complain about the weather!</TextLink>
        </Link>
      </PageTemplate>
    );
  };


export default WeatherPage;
