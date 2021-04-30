import operate from '../logic/operate';

describe('operate', () => {
  it('50% should return total = 0.5', () => {
    expect(operate('50', '100', '%')).toEqual({ total: '0.5', next: '', operation: '' });
  });

  it('50 + 70 should return total = 120', () => {
    expect(operate('50', '70', '+')).toEqual({ total: '120', next: '', operation: '' });
  });

  it('50 + 30 should NOT return total = 120', () => {
    expect(operate('50', '30', '+')).not.toEqual({ total: '120', next: '', operation: '' });
  });

  it('50 - 70 should return total = -20', () => {
    expect(operate('50', '70', '-')).toEqual({ total: '-20', next: '', operation: '' });
  });

  it('50 - 30 should NOT return total = -20', () => {
    expect(operate('50', '30', '-')).not.toEqual({ total: '-20', next: '', operation: '' });
  });

  it('50 X 70 should return total = 3500', () => {
    expect(operate('50', '70', 'X')).toEqual({ total: '3500', next: '', operation: '' });
  });

  it('50 X 30 should NOT return total = 3500', () => {
    expect(operate('50', '30', 'X')).not.toEqual({ total: '3500', next: '', operation: '' });
  });

  it('100 ÷ 20 should return total = 5', () => {
    expect(operate('100', '20', '÷')).toEqual({ total: '5', next: '', operation: '' });
  });

  it('100 ÷ 30 should NOT return total = 5', () => {
    expect(operate('100', '30', '÷')).not.toEqual({ total: '5', next: '', operation: '' });
  });

  it('50+/- should return total = -50', () => {
    expect(operate('50', '100', '+/-')).toEqual({ total: '-50', next: '', operation: '' });
  });

  it('-50+/- should return total = 50', () => {
    expect(operate('-50', '100', '+/-')).toEqual({ total: '50', next: '', operation: '' });
  });

  it('50+/- should NOT return total = 50', () => {
    expect(operate('50', '100', '+/-')).not.toEqual({ total: '50', next: '', operation: '' });
  });
});
