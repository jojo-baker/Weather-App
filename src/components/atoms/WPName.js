import React from 'react'

const WPName = ({firstname, lastname, ...props}) => {
    return (
        <div>{firstname} {lastname}</div>
    )
}

export default WPName;
