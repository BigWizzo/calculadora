import PropTypes from 'prop-types';

const Button = ({ buttonName, handleOnClick }) => <button type="button" onClick={() => handleOnClick(buttonName)}>{ buttonName }</button>;

Button.propTypes = {
  buttonName: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: '',
};

export default Button;
