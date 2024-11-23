export function throwError() {
  throw new Error('error');
}

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}
export function throwCustomError() {
  throw new CustomError('error');
}
