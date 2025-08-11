import React from 'react';

const Textbox = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  );
};

export default Textbox;
