import React from 'react';

const ChangeButton  = ({onButtonClick, ...props}) => {
    return (
      <div>
        <button onClick={onButtonClick}>{props.children}</button>
      </div>
    )
};

export default ChangeButton;