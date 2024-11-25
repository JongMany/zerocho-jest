import { sum, obj } from './toHaveBeenCalled';

test('sum 함수가 호출되었다.', () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled();
});

test('sum 함수가 1번 호출되었다.', () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test('sum 함수가 1,2와 함께 호출되었다.', () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test('obj.minus 함수가 1,2와 함께 호출되었다.(spy 함수 생성)', () => {
  // obj.minus 원본을 유지하면서, 새로운 스파이 함수를 생성한다. (obj.minus 원본을 변경하지 않음)
  const minusSpy = jest.fn(obj.minus);
  minusSpy(1, 2);
  expect(minusSpy).toHaveBeenCalledWith(1, 2);
});

test('obj.minus 함수가 1,2와 함께 호출되었다.(spy 삽입)', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest.spyOn(obj, 'minus');
  const result = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(-1);
});
