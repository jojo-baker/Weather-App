import React from 'react';
import './TextLink.css';

const TextLink = ({ onButtonClick, ...props }) => {
    return (
        <div className="TextLink" onClick={onButtonClick}>{props.children}</div>
    );
  };

export default TextLink;