import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import ComplaintForm from '../components/organisms/ComplaintForm';
import TextLink from '../components/atoms/TextLink';
import WeatherPerson from '../components/molecules/WeatherPerson';
import { Link } from 'react-router-dom';
import './ComplaintPage.css';

const ComplaintPage = ({firstname, lastname, bio, city, temperature, changeCity, ...props}) => {
    return (
        <div>
            <PageTemplate city={city} temperature={temperature} changeCity={changeCity} />
            <div className="complaint-form">
                <Link to="/"><TextLink linkType="regretlink">I regret this, take me back!</TextLink></Link>
                <WeatherPerson firstname="Clive" lastname="Weathers" bio="Clive has been a hipster weather-person for over 40 years and he’s too busy taste testing a new chai latte before the big new sneaker drop to read your complaints." avatar="/static/portrait-man.jpg"/>
                <h1>Make a Complaint</h1>
                <ComplaintForm />
            </div>
        </div>
    )
}

export default ComplaintPage;
