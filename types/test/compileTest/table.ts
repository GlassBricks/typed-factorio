const t1: table = { a: 3, b: true, c: {} }

const myThing1 = {
  a: t1,
  b: undefined,
}
const t2: table = myThing1

interface MyThing2 {
  name: string
  number: number
}
declare const foo: MyThing2

const t3: table = foo
const foo2 = t3 as MyThing2
