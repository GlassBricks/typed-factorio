import { tstl } from "../util"

test("add returns correct element type", () => {
  tstl`
    const button: ButtonGuiElement = game.player!.gui.screen.add({
      type: "button",
      enabled: true,
      mouse_button_filter: ["left"],
    })
  `.expectToHaveNoDiagnostics()

  tstl`
    declare const spec: TableGuiSpec
    const el: TableGuiElement = game.player!.gui.screen.add(spec)
  `.expectToHaveNoDiagnostics()
})

test("add does not accept additional properties", () => {
  tstl`
    game.player!.gui.screen.add({
      type: "button",
      foo: "bar"
    })
  `.expectToHaveDiagnostics()
})

test("index operator gives children", () => {
  tstl`
    declare const element: LuaGuiElement
    const name: string = element.name
    let child: LuaGuiElement | undefined = element.namee
    child = element.anything_else
    child = element["bar"]
    child = element[name]
  `.expectToHaveNoDiagnostics()
})

describe("adding choose-elem-button", () => {
  it("accepts matching elem_type and property", () => {
    tstl`
      const el = game.player!.gui.screen.add({
        type: "choose-elem-button",
        elem_type: "item",
        item: "foo",
      })
    `.expectToHaveNoDiagnostics()
  })

  it("does not accept mismatched elem_type and property", () => {
    tstl`
      const el = game.player!.gui.screen.add({
        type: "choose-elem-button",
        elem_type: "item",
        tile: "foo",
      })
    `.expectToHaveDiagnostics()
  })
})
