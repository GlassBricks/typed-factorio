import { tstl } from "./util"

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

test("Properties only exist in proper type", () => {
  tstl`
  declare const el: ListBoxGuiElementMembers
  const bar = el.entity
  `.expectToHaveDiagnostics()

  tstl`
  declare const el: CameraGuiElementMembers
  const bar = el.entity
  `.expectToHaveNoDiagnostics()
})

describe("style", () => {
  test("Can set and get", () => {
    tstl`
      declare const el: LuaGuiElement
      el.style = "foo_style"
      el.style.padding = 3
    `.expectToHaveNoDiagnostics()
  })
  test("can set subclass-specific styles", () => {
    tstl`
       declare const el: FlowGuiElement
       el.style.vertical_spacing = 3
    `.expectToHaveNoDiagnostics()
  })

  // not possible with current typescript features
  // test("not on subclass-specific styles", () => {
  //   tstl`
  //      declare const el: FrameGuiElement
  //      el.style.vertical_spacing = 3
  //   `.expectToHaveDiagnostics()
  // })
})
