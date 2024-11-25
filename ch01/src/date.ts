export function after3days() {
  const now = new Date();
  now.setDate(now.getDate() + 3);
  return now;
}

export function timer(callback: (...args: any[]) => any, timeout: number) {
  setTimeout(() => {
    callback('success');
  }, timeout);
}
