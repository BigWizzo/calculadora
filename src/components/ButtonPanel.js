import Button from './Button';

const groups = [
  {
    buttonName: 'group1',
    buttonValues: ['AC', '+/-', '%', ' ÷'],
  },
  {
    buttonName: 'group2',
    buttonValues: ['7', '8', '9', 'X'],
  },
  {
    buttonName: 'group3',
    buttonValues: ['4', '5', '6', '-'],
  },
  {
    buttonName: 'group4',
    buttonValues: ['1', '2', '3', '+'],
  },
  {
    buttonName: 'group5',
    buttonValues: ['0', '.', '='],
  },
];

const ButtonPanel = () => (
  <>
    <div>
      {groups.map((group) => (
        <div key={group.buttonName}>
          {group.buttonValues.map((value) => <Button buttonName={value} key={value} />)}
        </div>
      ))}
    </div>
  </>
);

export default ButtonPanel;
