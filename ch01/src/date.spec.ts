import { after3days, timer } from './date';

test('3일 후를 리턴한다', () => {
  jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));
  expect(after3days()).toStrictEqual(new Date(2024, 3, 12));
});

test('타이머 시간을 빠르게 돌리기', (done) => {
  expect.assertions(1);
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe('success');
    done();
  }, 10_000);
  jest.runAllTimers();
});

test('타이머 시간을 빠르게 돌리기', (done) => {
  expect.assertions(1);
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe('success');
    done();
  }, 10_000);
  jest.advanceTimersByTime(10_000);
});

afterEach(() => {
  jest.useRealTimers();
});
