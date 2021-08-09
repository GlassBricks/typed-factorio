export function sortByOrder(a: { order: number }, b: { order: number }): number {
  return a.order - b.order
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertNever(_value: never): never {
  throw new Error("Value should be never")
}

export function getFirst<T>(elemOrArray: T | T[]): T {
  if (Array.isArray(elemOrArray)) return elemOrArray[0]
  return elemOrArray
}
