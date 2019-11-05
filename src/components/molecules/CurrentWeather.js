import React from 'react';
import CityName from '../atoms/CityName';
import TextLink from '../atoms/TextLink';
import CurrentTemperature from '../atoms/CurrentTemperature';
// import RandoBox from '../atoms/RandoBox';
import '../atoms/TextLink.css';

const CurrentWeather = ({city, temperature, onTextLinkClick, ...props}) => {
    return (
        <div>
            <CityName city={city}/>
            <TextLink class="TextLink" onButtonClick={onTextLinkClick}>Change</TextLink>
            <CurrentTemperature temperature={temperature} />
            {/* <RandoBox /> */}
        </div>
    );
};

export default CurrentWeather;