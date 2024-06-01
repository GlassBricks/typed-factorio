export function byOrder(a: { order: number }, b: { order: number }): number {
  return a.order - b.order
}

export function assertNever(value: never): never {
  throw new Error("Value should be never: " + value)
}

export function getFirst<T>(elemOrArray: T | T[]): T {
  if (Array.isArray(elemOrArray)) return elemOrArray[0]
  return elemOrArray
}
