export function timer(callback: (...args: any[]) => any, timeout: number) {
  setTimeout(() => {
    callback('success');
  }, timeout);
}
