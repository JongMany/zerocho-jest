import { obj } from "./any";

test("any로 테스트하기", () => {
  expect(obj()).toStrictEqual({ a: expect.any(Number) });
});
test("mocking로 테스트하기", () => {
  const spyFn = jest.spyOn(Math, "random").mockReturnValue(0.33);
  expect(obj()).toStrictEqual({ a: 0.33 });
  spyFn.mockRestore();
});

test("0.1 + 0.2 = 0.3", () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
