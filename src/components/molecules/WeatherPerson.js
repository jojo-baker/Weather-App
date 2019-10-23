import React from 'react';
import WPName from '../atoms/WPName';
import WPBio from '../atoms/WPBio';
import WPAvatar from '../atoms/WPAvatar';

const WeatherPerson = () => {
    return (
        <div>
            <WPName />
            <WPBio />
            <WPAvatar />
        </div>
    )
}

export default WeatherPerson;
