import calculate from '../logic/calculate';

describe('calculate tests', () => {
  const objInput = {
    total: '3',
    next: '6',
    operation: '+',
  };
  test('AC test', () => {
    expect(calculate(objInput, 'AC')).toStrictEqual({
      next: null,
      operation: null,
      total: null,
    });
  });
  test('decimal dot test', () => {
    expect(calculate(objInput, '.')).toStrictEqual({
      total: '3',
      next: '6.',
      operation: '+',
    });
  });
  test('+/- symbol', () => {
    expect(calculate(objInput, '+/-')).toStrictEqual({
      total: '3',
      next: '-6',
      operation: '+',
    });
  });
});
