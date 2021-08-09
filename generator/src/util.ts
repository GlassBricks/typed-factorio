export function sortByOrder(a: { order: number }, b: { order: number }): number {
  return a.order - b.order
}

export function assertEquals<T>(expected: T, actual: T): void {
  if (expected !== actual) throw new Error(`assertion failed: ${actual}!==${expected}`)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertNever(_value: never): never {
  throw new Error("Value should be never")
}

export function getOrPut<K, V extends unknown>(map: Map<K, V>, key: K, def: V): V {
  const val = map.get(key)
  if (val === undefined) {
    map.set(key, def)
    return def
  }
  return val
}

export function assertType<T>(t: unknown): asserts t is T {
  // noop
}

export function getFirst<T>(elemOrArray: T | T[]): T {
  if (Array.isArray(elemOrArray)) return elemOrArray[0]
  return elemOrArray
}
