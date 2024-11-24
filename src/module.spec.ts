import { obj } from './module';
import { obj2 } from './module2';

// 모듈로 불러오는 메서드를 전부 모킹한다.
jest.mock('./module', () => {
  return {
    ...jest.requireActual('./module'),
    obj: {
      ...jest.requireActual('./module').obj,
      method3: jest.fn().mockReturnValue('method3'),
    },
  };
});

jest.mock('./module2');

test('method3', () => {
  expect(obj.method3()).toBe('method3');
});

test('property 교체', () => {
  jest.replaceProperty(obj2, 'prop', 'replaced Property');
  expect(obj2.prop).toBe('replaced Property');
});

test('method3', () => {
  console.log('obj2', obj2);
  expect(obj2.method3()).toBe('123');
});
