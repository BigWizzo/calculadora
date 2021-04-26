import Big from 'big.js';

const operate = (number1, number2, operation) => {
  let total = new Big(number1);
  const next = new Big(number2);

  switch (operation) {
    case '%':
      total = total.times(0.01).toString();
      break;
    case '+':
      total = total.plus(next).toString();
      break;
    case '-':
      total = total.minus(next).toString();
      break;
    case 'X':
      total = total.times(next).toString();
      break;
    case '÷':
      total = number2 === '0' ? '0' : total.div(next).toString();
      break;
    case '+/-':
      total = total.times(-1).toString();
      break;
    default:
      return { total, next, operation };
  }
  return { total, next: '', operation: '' };
};

export default operate;
