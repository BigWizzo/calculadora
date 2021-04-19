import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '%':
      total = ((secondNum / 100) * firstNum);
      break;
    case '÷':
      total = (firstNum / secondNum);
      break;
    case '*':
      total = (firstNum * secondNum);
      break;
    case '-':
      total = (firstNum - secondNum);
      break;
    case '+':
      total = (firstNum + secondNum);
      break;
    default:
      total = 'Error: Cannot Perform operation';
      break;
  }
  return total.toString();
};
export default operate;
