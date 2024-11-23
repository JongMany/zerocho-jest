import { sum } from './toBe';

test('sum 함수는 두 숫자를 더한 결과를 반환한다', () => {
  expect(sum(1, 2)).toBe(3);
});
