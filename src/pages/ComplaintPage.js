import React from 'react';
import PageTemplate from '../components/templates/PageTemplate';
import UserForm from '../components/organisms/UserForm';
import RegretLink from '../components/atoms/RegretLink';
import WeatherPerson from '../components/molecules/WeatherPerson';

const ComplaintPage = ({firstname, lastname, bio, ...props}) => {
    return (
        <div>
            <h1>This is the start of the complaint form</h1>
            <PageTemplate />
            <RegretLink />
            <WeatherPerson firstname="Clive" lastname="Weathers" bio="Here is the Weather Person's bio" avatar="/avatar.png"/>
            <h1>Make a Complaint</h1>
            <UserForm />
        </div>
    )
}

export default ComplaintPage;
