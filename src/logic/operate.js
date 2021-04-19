import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);

  switch (operation) {
    case '%':
      return ((secondNum / 100) * firstNum);
    case '÷':
      return (firstNum / secondNum).toString();
    case 'X':
      return (firstNum * secondNum).toString();
    case '-':
      return (firstNum - secondNum).toString();
    case '+':
      return (firstNum + secondNum).toString();
    default:
      return false;
  }
};

export default operate;
