import React from 'react';
import PropTypes from 'prop-types';
import './WPName.css';

const WPName = ({firstname, lastname, ...props}) => {
    return (
        <p className="WPName">{firstname} {lastname}</p>
    )
}

WPName.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default WPName;
