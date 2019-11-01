import React from 'react'

const WeatherIcon = ({icon, ...props}) => {
    return (
        <img src={icon} alt=""/>
        // <div>{icon}</div>
    )
}

export default WeatherIcon;
