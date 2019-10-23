import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import RegretLink from '../atoms/RegretLink';
import WeatherPerson from '../molecules/WeatherPerson';
import UserForm from '../organisms/UserForm';

const FormTemplate = ({firstname, lastname, bio, avatar, ...props}) => {
    return (
        <div>
            <CurrentWeather />
            <RegretLink />
            <WeatherPerson firstname={firstname} lastname={lastname} bio={bio} avatar={avatar}/>
            <h1>Make a Complaint</h1>
            <UserForm />
        </div>
    )
}

export default FormTemplate;
