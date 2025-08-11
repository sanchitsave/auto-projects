import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
