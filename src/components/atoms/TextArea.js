import React from 'react';

const TextArea = ({value, onChange, name, ...props}) => {
  return <textarea  name={name} value={value} onChange={onChange}/>;
};

export default TextArea;