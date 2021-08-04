// indexing + generics

type LuaCustomTable<K extends keyof any, V> = {
  [P in K]: V
}

interface LuaLazyLoadedValue<T> {
  get(): T
}

interface Fluid {}

interface LuaFluidBox extends Array<Fluid | undefined> {}

type LuaGuiElement = {
  readonly [name: string]: LuaGuiElement | undefined
}

interface LuaItemStack {}

interface LuaInventory extends ReadonlyArray<LuaItemStack> {}

interface LuaTransportLine extends ReadonlyArray<LuaItemStack> {}
