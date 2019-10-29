import React from 'react';
import CityName from '../atoms/CityName';
import ChangeButton from '../atoms/ChangeButton';
import CurrentTemperature from '../atoms/CurrentTemperature';
import RandoBox from '../atoms/RandoBox';

const CurrentWeather = ({city, temperature, onTextLinkClick, ...props}) => {
    return (
        <div>
            <CityName city={city}/>
            <ChangeButton onButtonClick={onTextLinkClick}>Change City</ChangeButton>
            <CurrentTemperature temperature={temperature} />
            <RandoBox />
        </div>
    );
};

export default CurrentWeather;