import { obj } from './toMatchObject';

test('클래스 인스턴스 비교는 toMatchObject로 해야한다.', () => {
  expect(obj('hello')).toMatchObject({
    a: 'hello',
  });
  expect(obj('hello')).toEqual({
    a: 'hello',
  });
  expect(obj('hello')).not.toStrictEqual({
    a: 'hello',
  });
});
