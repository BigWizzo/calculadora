import Operate from './operate';

const Calculate = ({ total, next, operation }, buttonName) => {
  switch (buttonName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (next) {
        return {
          total,
          next: Operate(next, '-1', 'x'),
          operation,
        };
      }
      return {
        total: Operate(total, '-1', 'x'),
        next,
        operation,
      };
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation) {
        return {
          total,
          next: next ? next + buttonName : buttonName,
          operation,
        };
      }
      return {
        total: total ? total + buttonName : buttonName,
        next,
        operation,
      };

    case '.':
      if (operation) {
        if (next) {
          return {
            total,
            next: next + buttonName,
            operation,
          };
        }
        return {
          total,
          next: `0${buttonName}`,
          operation,
        };
      }
      if (total) {
        return {
          total: total + buttonName,
          next,
          operation,
        };
      }
      return {
        total: `0${buttonName}`,
        next,
        operation,
      };

    case '=':
      if (operation === '÷' && next === '0') {
        return {
          total: 'No zero division',
          next: null,
          operation: null,
        };
      } return {
        total: next ? Operate(total, next, operation) : total,
        next: null,
        operation: null,
      };
    case '%':
      if (total) {
        return {
          total: next ? ((Operate(total, next, operation)) / 100) : 'impossible',
          next: null,
          operation: null,
        };
      }
      break;
    default:
      if (operation) {
        return {
          total: next ? Operate(total, next, operation) : 'impossible',
          next: null,
          operation: buttonName,
        };
      }
      return {
        total,
        next: null,
        operation: buttonName,
      };
  }
  return { total, next, operation };
};

export default Calculate;
