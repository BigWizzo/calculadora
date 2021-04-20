import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName === '+/-') {
    const negTotal = (total) * -1;
    const negNext = (next) * -1;
    return { total: negTotal, next: negNext };
  }
  if (buttonName === 'AC') {
    return { total: 0, next: 0, operation: null };
  }
  if (buttonName === '.') {
    return { total: '0.' };
  }
  if (buttonName === '%' || buttonName === '÷' || buttonName === 'X' || buttonName === '-' || buttonName === '+') {
    const totalResult = operate(total, next, operation);
    return { total: totalResult.toString() };
  }
  return false;
};

export default calculate;
