import { obj } from './module';
import { obj2 } from './module2';

import axios from 'axios';
jest.mock('axios');

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

beforeEach(() => {
  jest.restoreAllMocks();
});

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

test('axios spyOn 모킹', () => {
  const spy = jest.spyOn(axios, 'get').mockResolvedValue({ data: '123' });
  return axios.get('/').then((res) => {
    expect(res.data).toBe('123');
    spy.mockRestore();
  });
});

test('axios __mocks__ 모킹', async () => {
  const response = await axios.get('/');
  expect(response.data).toEqual({});
});
