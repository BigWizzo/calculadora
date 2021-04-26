import PropTypes from 'prop-types';
import Button from './Button';

const groups = [
  {
    groupName: 'group1',
    buttonValues: ['AC', '+/-', '%', '÷'],
  },
  {
    groupName: 'group2',
    buttonValues: ['7', '8', '9', 'X'],
  },
  {
    groupName: 'group3',
    buttonValues: ['4', '5', '6', '-'],
  },
  {
    groupName: 'group4',
    buttonValues: ['1', '2', '3', '+'],
  },
  {
    groupName: 'group5',
    buttonValues: ['0', '.', '='],
  },
];

const ButtonPanel = ({ onClick }) => {
  const clickHandler = (buttonName) => onClick(buttonName);

  return (
    <div>
      {groups.map((group) => (
        <div key={group.groupName}>
          {group.buttonValues.map((value) => (
            <Button buttonName={value} key={value} onClick={clickHandler} />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
