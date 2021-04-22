import PropTypes from 'prop-types';

const Button = ({ buttonName, handleOnClick }) => <button type="button" onClick={() => handleOnClick(buttonName)}>{ buttonName }</button>;

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
