import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '%':
      result = ((secondNum / 100) * firstNum);
      break;
    case '÷':
      result = (firstNum / secondNum);
      break;
    case '*':
      result = (firstNum * secondNum);
      break;
    case '-':
      result = (firstNum - secondNum);
      break;
    case '+':
      result = (firstNum + secondNum);
      break;
    default:
      result = 'Error: Cannot Perform operation';
      break;
  }
  return result.toString();
};
export default operate;
