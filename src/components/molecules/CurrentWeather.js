import React from 'react';
import CityName from '../atoms/CityName';
import TextLink from '../atoms/TextLink';
import CurrentTemperature from '../atoms/CurrentTemperature';
import RandoBox from '../atoms/RandoBox';

const CurrentWeather = ({city, temperature, onTextLinkClick, ...props}) => {
    return (
        <div>
            <CityName city={city}/>
            <TextLink onButtonClick={onTextLinkClick}>Change City</TextLink>
            <CurrentTemperature temperature={temperature} />
            <RandoBox />
        </div>
    );
};

export default CurrentWeather;