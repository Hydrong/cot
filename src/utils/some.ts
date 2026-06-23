export function some<T>(option: T | undefined | null): T {
  if (option === undefined || option === null) {
    throw new Error();
  }
  return option;
}
