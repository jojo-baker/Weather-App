import React from 'react';
import HourlyUpdate from '../molecules/HourlyUpdate';

const TimeSlider = ({icon, time, temperature, ...props}) => {
    return (
        <div>
            <HourlyUpdate time={time} icon={icon} temperature={temperature} />

        </div>
    )
}

export default TimeSlider;
