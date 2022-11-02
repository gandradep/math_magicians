import calculate from '../logic/calculate';

describe('calculate tests', () => {
  const objInput = {
    total: 3,
    next: 6,
    operation: null,
  };
  test('AC test', () => {
    expect(calculate(objInput, 'AC')).toStrictEqual({      
      next: null,
      operation: null,
      total: null,
    });
  });
});
