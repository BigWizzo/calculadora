import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case 'AC':
      return { total: '', next: '', operation: '' };
    case '+/-':
    case '%':
      operation = buttonName;
      next = 0;
      return operate(total, next, operation);
    case '.':
      if (total && !next) {
        total += buttonName;
      } else if (!total && !next) {
        total = '0.';
      } else if (total && operation) {
        next += buttonName;
      }
      return { total, next, operation };
    case '=':
      return operate(total, next, operation);
    case '0':
    case '÷':
    case 'X':
    case '-':
    case '+':
      operation = buttonName;
      return { total, next, operation };
    case buttonName.match(/[0-9]|./).toString():
      if (operation) {
        next += buttonName;
      } else if (!operation) {
        total += buttonName;
      }
      return { total, next, operation };

    default:
      return 'impossible operation';
  }
};

export default calculate;
