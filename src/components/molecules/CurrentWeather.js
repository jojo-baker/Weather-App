import React from 'react';
import CityName from '../atoms/CityName';
import ChangeButton from '../atoms/ChangeButton';
import CurrentTemperature from '../atoms/CurrentTemperature';
import RandoBox from '../atoms/RandoBox';

const CurrentWeather = ({city, ...props}) => {
    return (
        <div>
            <CityName city={city}/>
            <ChangeButton />
            <CurrentTemperature />
            <RandoBox />
        </div>
    );
};

export default CurrentWeather;