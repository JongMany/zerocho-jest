jest.mock('./mockFunc');
jest.mock('./mockClass');

import func, { doubleFn } from './mockFunc';
import A from './mockClass';

test('func와 A가 정의되어 있어야 한다.', () => {
  console.log(func, 'A', A, new A().methodA, new A().methodB);

  const originalFn = jest.requireActual('./mockFunc');
  // expect(func()).toBe('singleFn 원본 함수');
  console.log('doubleFn', doubleFn);
  expect(originalFn.default()).toBe('singleFn 원본 함수');
  expect(originalFn.doubleFn()).toBe('double 원본 함수');
  expect(func).toBeDefined();
  expect(A).toBeDefined();
});
