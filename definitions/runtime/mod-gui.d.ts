/** @noSelfInFile */

/** @noResolution */
declare module "mod-gui" {
  const button_style: string
  const frame_style: string

  function get_button_flow(player: LuaPlayer): FrameGuiElement

  function get_frame_flow(player: LuaPlayer): FlowGuiElement
}
