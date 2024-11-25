import { throwError, throwCustomError, CustomError } from './throwFunction';

test('error가 잘 난다.', () => {
  expect(() => throwError()).toThrow('error');
  expect(() => throwCustomError()).toThrow('error');
});

test('error가 잘 난다.1', () => {
  try {
    throwError();
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
    expect(e).toStrictEqual(new Error('error'));
  }
});

test('error가 잘 난다.2', () => {
  try {
    throwCustomError();
  } catch (e) {
    expect(e).toBeInstanceOf(CustomError);
    expect(e).toStrictEqual(new CustomError('error'));
  }
});
