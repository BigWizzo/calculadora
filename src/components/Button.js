import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, onClick,
}) => {
  const handleClick = (name) => onClick(name);

  return (
    <button
      className="button"
      type="button"
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
