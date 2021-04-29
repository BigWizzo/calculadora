import PropTypes from 'prop-types';

const Button = ({
  buttonName, onClick,
}) => {
  const handleClick = (buttonName) => onClick(buttonName);
  let className = 'button button-color';
  if (buttonName === '÷'
  || buttonName === 'X'
  || buttonName === '-'
  || buttonName === '+'
  || buttonName === '=') {
    className = 'button button-color-right';
  }

  return (
    <button className={className} type="button" onClick={() => handleClick(buttonName)}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
