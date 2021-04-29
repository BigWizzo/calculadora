import PropTypes from 'prop-types';

const Button = ({
  buttonName, onClick, color,
}) => {
  const handleClick = (buttonName) => onClick(buttonName);

  return (
    <button className="button" style={{ backgroundColor: color }} type="button" onClick={() => handleClick(buttonName)}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
