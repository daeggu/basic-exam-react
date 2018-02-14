import React from 'react';
import './Button.css';

const Button = ({onCreate, onRemove}) => {
      return (
            <div className="Buttons">
                  <div className="btn add" onClick={onCreate}>
                        Create
                  </div>
                  <div className="btn remove" onClick={onRemove}>
                        Remove
                  </div>
            </div>
      );
};

export default Button;