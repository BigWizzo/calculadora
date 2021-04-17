import PropTypes from 'prop-types';

const Button = ({ buttonName }) => <button type="button">{buttonName}</button>;

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
