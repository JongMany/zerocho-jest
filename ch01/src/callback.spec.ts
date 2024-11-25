import { timer } from './callback';

test('timer 잘 실행되는지 테스트', (done) => {
  timer((message: string) => {
    expect(message).toBe('success');
    done();
  }, 1000);
});
