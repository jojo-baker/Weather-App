import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import RegretLink from '../atoms/RegretLink';
import WeatherPerson from '../molecules/WeatherPerson';
import UserForm from '../organisms/UserForm';

const FormTemplate = () => {
    return (
        <div>
            <CurrentWeather />
            <RegretLink />
            <WeatherPerson />
            <h1>Make a Complaint</h1>
            <UserForm />
        </div>
    )
}

export default FormTemplate;
