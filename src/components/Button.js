import PropTypes from 'prop-types';

const Button = ({
  buttonName, onClick,
}) => {
  const handleClick = (buttonName) => onClick(buttonName);
  let className = 'button flex w-25 button-color';
  if (buttonName === '÷'
  || buttonName === 'X'
  || buttonName === '-'
  || buttonName === '+'
  || buttonName === '=') {
    className = 'button flex w-25 button-color-right';
  }

  if (buttonName === '0') {
    className = 'button flex w-50 button-color wide';
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
