import { obj } from './toStrictEqual';

test('객체는 toStrictEqual로 비교해야 한다.', () => {
  expect(obj()).toStrictEqual({ a: 'hello' });
  expect(obj()).toEqual({ a: 'hello' });
  expect(obj()).not.toBe({ a: 'hello' });
});

test('배열도 to Strict Equal을 써야 한다.', () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
