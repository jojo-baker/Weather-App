import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import ComplaintForm from '../components/organisms/ComplaintForm';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import { Link } from 'react-router-dom';

const ComplaintPage = ({firstname, lastname, bio, city, temperature, changeCity, ...props}) => {
    return (
        <div>
            <PageTemplate city={city} temperature={temperature} changeCity={changeCity} />
            <Link to="/"><TextLink linkType="regretlink">I regret this, take me back!</TextLink></Link>
            <WeatherPerson firstname="Clive" lastname="Weathers" bio="Here is the Weather Person's bio" avatar="/static/portrait-man.jpg"/>
            <h1>Make a Complaint</h1>
            <ComplaintForm />
        </div>
    )
}

export default ComplaintPage;
