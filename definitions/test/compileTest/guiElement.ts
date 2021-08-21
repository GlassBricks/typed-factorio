const button: ButtonGuiElement = game.player!.gui.screen.add({
  type: "button",
  enabled: true,
  mouse_button_filter: ["left"],
})

const name: string = button.name
const child: LuaGuiElement | undefined = button.namee

const chooseElemButton = game.player!.gui.screen.add({
  type: "choose-elem-button",
  elem_type: "item",
  item: "foo",
  filters: [
    {
      filter: "name",
      name: "foo2",
    },
  ],
})
