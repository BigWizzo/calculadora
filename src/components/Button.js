import PropTypes from 'prop-types';

const Button = ({ buttonName }) => <div>{buttonName}</div>;

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
