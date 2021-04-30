import calculate from '../logic/calculate';

const addNums = {
  total: '100',
  next: '90',
  operation: '+',
};

const subNums = {
  total: '100',
  next: '90',
  operation: '-',
};

const clearDisplay = {
  total: 'to be cleared',
  next: 'to be cleared',
  operation: 'to be cleared',
};

describe('calculate', () => {
  it('should return the same given object when adding', () => {
    expect(calculate(addNums, '+')).toEqual({
      total: '100',
      next: '90',
      operation: '+',
    });
  });

  it('should NOT return a different object when adding', () => {
    expect(calculate(addNums, '+')).not.toEqual({
      total: '190',
      next: '90',
      operation: '+',
    });
  });

  it('should return the same given object when subtracting', () => {
    expect(calculate(subNums, '-')).toEqual({
      total: '100',
      next: '90',
      operation: '-',
    });
  });

  it('should clear the display', () => {
    expect(calculate(clearDisplay, 'AC')).toEqual({
      total: '',
      next: '',
      operation: '',
    });
  });
});
