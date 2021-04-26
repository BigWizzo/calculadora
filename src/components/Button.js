import PropTypes from 'prop-types';

const Button = ({ buttonName, onClick }) => {
  const handleClick = (buttonName) => onClick(buttonName);

  return (
    <button type="button" onClick={() => handleClick(buttonName)}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
