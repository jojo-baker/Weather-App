import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import UserForm from '../components/organisms/UserForm';
import RegretLink from '../components/atoms/RegretLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import { Link } from 'react-router-dom';

const ComplaintPage = ({firstname, lastname, bio, city, temperature, changeCity, ...props}) => {
    return (
        <div>
            <PageTemplate city={city} temperature={temperature} changeCity={changeCity} />
            <Link to="/"><RegretLink /></Link>
            <WeatherPerson firstname="Clive" lastname="Weathers" bio="Here is the Weather Person's bio" avatar="/avatar.png"/>
            <h1>Make a Complaint</h1>
            <UserForm />
        </div>
    )
}

export default ComplaintPage;
