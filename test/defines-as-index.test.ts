import { tstl } from "./util"

test("can use defines as index", () => {
  tstl`
    const foo: Partial<Record<defines.direction, string>> = {}
    foo[defines.direction.north] = "north"
  `.expectToHaveNoDiagnostics()
})

test("can have interface with defines as members", () => {
  tstl`
    interface Foo {
      [defines.direction.north]: string
    }
  `.expectToHaveNoDiagnostics()
})
