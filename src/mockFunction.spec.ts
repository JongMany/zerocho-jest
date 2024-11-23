import { obj } from './mockFunction';

test('obj.minus 함수가 1,2와 함께 호출되었다.(spy 삽입)', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest.spyOn(obj, 'minus');
  const result = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(-1);
  minusSpy.mockRestore();
});

test('obj.minus 함수에 스파이를 심고, 실행도 안되게 하기', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest.spyOn(obj, 'minus').mockImplementation(); // 기본값은 () => {}
  const result = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(undefined);
  minusSpy.mockRestore();
});

test('obj.minus 함수에 스파이를 심고, 리턴값을 바꾸기', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest.spyOn(obj, 'minus').mockImplementation((a, b) => a + b);
  const result = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledWith(1, 2);
  expect(result).toBe(3);
  minusSpy.mockRestore();
});

test('obj.minus 함수에 스파이를 심고, 한 번만 구현을 변경하기', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest
    .spyOn(obj, 'minus')
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementationOnce(() => 5);
  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(3);
  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(-1);
  minusSpy.mockRestore();
});

test('obj.minus 함수에 스파이를 심고, 리턴값이 다르게 나오도록 수정', () => {
  // method에 spy를 추가하여, 객체에 접근하여 호출할 수 있게 된다. (obj.minus 원본을 변경)
  const minusSpy = jest.spyOn(obj, 'minus').mockReturnValueOnce(5);

  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);
  expect(minusSpy).toHaveBeenCalledTimes(3);
  expect(result1).toBe(5);
  expect(result2).toBe(-1);
  expect(result3).toBe(-1);
  minusSpy.mockRestore();
});
