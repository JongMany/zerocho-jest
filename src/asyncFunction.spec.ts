import { okAsync, okPromise, noAsync, noPromise } from './asyncFunction';
import * as fns from './asyncFunction';

test('okPromise 테스트1', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  return expect(okSpy()).resolves.toBe('ok');
});

test('okPromise 테스트2', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe('ok');
  });
});

test('okPromise 테스트3', async () => {
  expect.assertions(1);
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();
  expect(result).toBe('ok');
});

test('noPromise 테스트1', () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  return expect(noSpy()).rejects.toBe('error');
});

test('noPromise 테스트2', () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  return noSpy().catch((result) => {
    expect(result).toBe('error');
  });
});

test('noPromise 테스트3', async () => {
  expect.assertions(1);
  const noSpy = jest.fn(noPromise);
  try {
    const result = await noSpy();
  } catch (e) {
    expect(e).toBe('error');
  }
});

test('okAsync 테스트1', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  return expect(okSpy()).resolves.toBe('ok');
});

test('okAsync 테스트2', () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  return okSpy().then((result) => {
    expect(result).toBe('ok');
  });
});

test('okAsync 테스트3', async () => {
  expect.assertions(1);
  const okSpy = jest.fn(okAsync);
  const result = await okSpy();
  expect(result).toBe('ok');
});

test('noAsync 테스트1', () => {
  expect.assertions(1);
  const noSpy = jest.fn(noAsync);
  return expect(noSpy()).rejects.toBe('no');
});

test('noAsync 테스트2', () => {
  expect.assertions(1);
  const noSpy = jest.fn(noAsync);
  return noSpy().catch((result) => {
    expect(result).toBe('no');
  });
});

test('noAsync 테스트3', async () => {
  expect.assertions(1);
  const noSpy = jest.fn(noAsync);
  try {
    const result = await noSpy();
  } catch (e) {
    expect(e).toBe('no');
  }
});

test('okPromise 테스트4', () => {
  expect.assertions(1);
  jest.spyOn(fns, 'okPromise').mockResolvedValue('ok');
  return expect(fns.okPromise()).resolves.toBe('ok');
});

test('okPromise 테스트5', () => {
  expect.assertions(1);
  jest.spyOn(fns, 'okPromise').mockReturnValue(Promise.resolve('ok'));
  return expect(fns.okPromise()).resolves.toBe('ok');
});

test('noPromise 테스트4', () => {
  expect.assertions(1);
  jest.spyOn(fns, 'noPromise').mockRejectedValue('error');
  return expect(fns.noPromise()).rejects.toBe('error');
});

test('noPromise 테스트5', () => {
  expect.assertions(1);
  jest.spyOn(fns, 'noPromise').mockReturnValue(Promise.reject('error'));
  return expect(fns.noPromise()).rejects.toBe('error');
});
