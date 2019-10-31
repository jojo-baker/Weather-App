import React from 'react';
import PropTypes from 'prop-types';

const WPAvatar = ({avatar, ...props}) => {
    return (
        <img src={avatar} alt="weather person profile"/>
    )
}

WPAvatar.propTypes = {
    image: PropTypes.string.isRequired
};

export default WPAvatar;
