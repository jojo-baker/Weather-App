import React from 'react';
import PropTypes from 'prop-types';

const WPName = ({firstname, lastname, ...props}) => {
    return (
        <div>{firstname} {lastname}</div>
    )
}

WPName.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default WPName;
