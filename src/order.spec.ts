import { first, second, third } from './order';

test('first -> second -> third', () => {
  const firstSpy = jest.fn(first);
  const secondSpy = jest.fn(second);
  const thirdSpy = jest.fn(third);

  firstSpy();
  secondSpy();
  // firstSpy();
  thirdSpy();
  // firstSpy();

  expect(firstSpy.mock.invocationCallOrder[0]).toBeLessThan(
    secondSpy.mock.invocationCallOrder[0],
  );
  expect(secondSpy.mock.invocationCallOrder[0]).toBeLessThan(
    thirdSpy.mock.invocationCallOrder[0],
  );
});

test('first -> second -> third (2)', () => {
  const firstSpy = jest.fn(first);
  const secondSpy = jest.fn(second);
  const thirdSpy = jest.fn(third);

  firstSpy();
  secondSpy();
  thirdSpy();

  expect(firstSpy).toHaveBeenCalledBefore(secondSpy);
  expect(secondSpy).toHaveBeenCalledBefore(thirdSpy);
});
