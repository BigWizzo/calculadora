import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '%':
      total = firstNum.mod(secondNum);
      break;
    case '÷':
      total = firstNum.div(secondNum);
      break;
    case '*':
      total = firstNum.times(secondNum);
      break;
    case '-':
      total = firstNum.minus(secondNum);
      break;
    case '+':
      total = firstNum.plus(secondNum);
      break;
    default:
      total = 'Error: Cannot Perform operation';
      break;
  }
  return total.toString();
};
export default operate;
